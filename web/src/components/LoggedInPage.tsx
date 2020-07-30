import React from "react";
import { CardMedia, Paper, Typography } from "@material-ui/core";

import { useHelloWorldQuery } from "../graphql/hooks";

const LoggedInPage: React.FC = () => {
  const { data } = useHelloWorldQuery();

  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Typography align="center" variant="h1" color="secondary">
        <CardMedia 
          style={{ height: 50, width: 'auto', margin: '0 auto' }} 
          component={'img'} 
          image={require('web/public/web_logo.png')}
        />
        Welcome {data?.hello || "Friend"}!
      </Typography>
    </Paper>
  );
};

export default LoggedInPage;
