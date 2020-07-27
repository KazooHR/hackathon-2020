import fs from "fs";
import path from "path";
import { gql, ApolloServer } from "apollo-server-express";

import { GraphqlContext } from "./context";
import resolvers from "./resolvers";

const typeDefs = fs
  .readFileSync(path.join(__dirname, "schema.graphql"), "utf8")
  .toString();

const schema = gql(typeDefs);

export const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  debug: true,
  introspection: true,
  playground: true,
  cacheControl: {
    defaultMaxAge: 500,
  },
  tracing: true,
  context: async (expressContext): Promise<GraphqlContext> => {
    const { connection } = expressContext;
    if (connection?.context) {
      return connection.context;
    }
    const context = new GraphqlContext({ expressContext });
    await context.parseToken();
    return context;
  },
  subscriptions: {
    onConnect: async (
      connectionParams: { authToken?: string },
      webSocket
    ): Promise<GraphqlContext> => {
      if (connectionParams.authToken) {
        const context = new GraphqlContext({
          authToken: connectionParams.authToken,
          webSocket,
        });
        await context.parseToken();
        return context;
      }
      throw new Error("Missing auth token!");
    },
  },
});
