import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { LoginCallback, useOktaAuth, SecureRoute } from "@okta/okta-react";

import AdminDashboard from "./components/AdminDashboard";
import Layout from "./components/Layout";
import AuthenticatedLayout from "./components/AuthenticatedLayout";
import LoginForm from "./components/LoginForm";
import LoggedInPage from "./components/LoggedInPage";

const CALLBACK_PATH = "/authorization-code/callback";

const App: React.FC = () => {
  const { authState } = useOktaAuth();

  const router = () => {
    return (
      <Router>
        <Switch>
          <Route path={CALLBACK_PATH} component={LoginCallback} />
          <SecureRoute path="/logged-in" exact component={LoggedInPage} />
          <Route path="/login" component={LoginForm} />
          <Route path="/admin" component={AdminDashboard} />
          <Redirect
            from="/"
            exact
            to={`${authState.isAuthenticated ? "/logged-in" : "/login"}`}
          />
        </Switch>
      </Router>
    );
  };
  
  const unauthenticatedLayout = () => (<Layout>{router()}</Layout>);
  const authenticatedLayout = () => (<AuthenticatedLayout>{router()}</AuthenticatedLayout>);
  
  if (authState.isAuthenticated && window.location.pathname !== '/login') {
    return (authenticatedLayout());
  } else {
    return (unauthenticatedLayout());
  }
};

export default App;
