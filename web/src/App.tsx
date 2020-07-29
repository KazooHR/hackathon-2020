import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { LoginCallback, useOktaAuth, SecureRoute } from "@okta/okta-react";

import Layout from "./components/Layout";
import LoginForm from "./components/LoginForm";
import LoggedInPage from "./components/LoggedInPage";

const CALLBACK_PATH = "/authorization-code/callback";

const App: React.FC = () => {
  const { authState } = useOktaAuth();

  return (
    <Layout>
      <Router>
        <Switch>
          <Route path={CALLBACK_PATH} component={LoginCallback} />
          <SecureRoute path="/logged-in" exact component={LoggedInPage} />
          <Route path="/login" component={LoginForm} />
          <Redirect
            from="/"
            exact
            to={`${authState.isAuthenticated ? "/logged-in" : "/login"}`}
          />
        </Switch>
      </Router>
    </Layout>
  );
};

export default App;
