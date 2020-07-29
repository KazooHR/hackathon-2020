import { WebSocketLink } from "apollo-link-ws";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink, split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { setContext } from "apollo-link-context";

import config from "../utils/config";
import auth from "../utils/auth";

const httpLink = new HttpLink({
  uri: config.IS_PROD ? "/graphql" : "http://localhost:8080/graphql",
});

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const { idToken } = auth.getAuthState();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: idToken ? idToken : "",
    },
  };
});

const websocketHost = `wss://${window.location.host}/graphql`;

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: config.IS_PROD ? websocketHost : "ws://localhost:8080/graphql",
  options: {
    reconnect: true,
    lazy: true,
    connectionParams: async () => {
      const { idToken } = auth.getAuthState();
      return {
        authToken: idToken,
      };
    },
  },
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  authLink.concat(httpLink)
);

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    link,
  ]),
  cache: new InMemoryCache({
    resultCaching: true,
    freezeResults: true,
    dataIdFromObject: (item) => item.id,
  }),
});

export default client;
