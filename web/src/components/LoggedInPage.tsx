import React from "react";
import { Paper, Typography } from "@material-ui/core";

import { useOktaAuth } from "@okta/okta-react";
import { useHelloWorldQuery } from "../graphql/hooks";

const LoggedInPage: React.FC = () => {
  const { authState } = useOktaAuth();

  const { data } = useHelloWorldQuery();

  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Typography variant="h4" gutterBottom>
        You're logged in!!
      </Typography>

      <Typography>{JSON.stringify(authState, null, 2)}</Typography>
      <Typography>{JSON.stringify(data || {}, null, 2)}</Typography>
    </Paper>
  );
};

export default LoggedInPage;
