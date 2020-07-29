import React from "react";
import { Fab, Paper, Typography } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { useOktaAuth } from "@okta/okta-react";

const LoginForm: React.FC = () => {
  const { authState, authService } = useOktaAuth();
  const login = () => authService.login("/logged-in");

  if (authState.isPending) {
    return <div>Loading authentication...</div>;
  }

  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>

      <Fab size="small" color="primary" onClick={login}>
        <ArrowForwardIcon />
      </Fab>
    </Paper>
  );
};

export default LoginForm;
