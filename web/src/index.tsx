import "./styles.css";

import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { Security } from "@okta/okta-react";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import client from "./graphql/client";
import auth from "./utils/auth";

const oktaConfig = {
  authService: auth,
};

ReactDOM.render(
  <Security {...oktaConfig}>
    <ApolloProvider client={client as any}>
      <App />
    </ApolloProvider>
  </Security>,
  document.getElementById("root")
);

serviceWorker.unregister();
