import React from "react";
import { CircularProgress } from "@material-ui/core";

import Layout from "./components/Layout";
import LoginForm from "./components/LoginForm";
import { useAuth } from "./contexts/AuthContext";

const App: React.FC = () => {
  const { loggedIn, loading } = useAuth();
  return (
    <Layout>
      {loading ? (
        <CircularProgress
          size={64}
          style={{ margin: "4rem auto", display: "block" }}
        />
      ) : (
        <>
          {loggedIn ? (
            <>
              <div>You're logged In</div>
            </>
          ) : (
            <>
              <LoginForm />
            </>
          )}
        </>
      )}
    </Layout>
  );
};

export default App;
