import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { Logo } from "@kazoohr/confetti";

import { useHelloWorldQuery } from "../graphql/hooks";

const LoggedInPage: React.FC = () => {
  const { data } = useHelloWorldQuery();

  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Typography align="center" variant="h1" color="secondary">
        <Logo
          companyName="Kazoo" 
          imgUrl="https://www.kazoohr.com/wp-content/themes/kazoo2019/assets/dist/images/Kazoo_Logo_Primary_Green.png"
          redirectTo="https://www.kazoohr.com/"
        />
        Welcome {data?.hello || "Friend"}!
      </Typography>
    </Paper>
  );
};

export default LoggedInPage;
