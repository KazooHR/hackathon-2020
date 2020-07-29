import React from "react";
import { Paper, Typography } from "@material-ui/core";

import { useHelloWorldQuery } from "../graphql/hooks";

const LoggedInPage: React.FC = () => {
  const { data } = useHelloWorldQuery();

  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Typography align="center" variant="h1">
        Welcome {data?.hello || "Friend"}!
      </Typography>
    </Paper>
  );
};

export default LoggedInPage;
