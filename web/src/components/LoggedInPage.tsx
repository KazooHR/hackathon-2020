import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { Logo } from "@kazoohr/confetti";

import { PopUpFeedback } from "./PopUpFeedback/Feedback";
import { useCurrentRequestQuery } from "../graphql/hooks";

const LoggedInPage: React.FC = () => {
  const { data } = useCurrentRequestQuery();
  const { currentRequest } = data || {};

  return (
    <>
      <Paper style={{ margin: 16, padding: 16 }}>
        <Typography align="center" variant="h1" color="secondary">
          <Logo
            companyName="Kazoo"
            imgUrl="https://www.kazoohr.com/wp-content/themes/kazoo2019/assets/dist/images/Kazoo_Logo_Primary_Green.png"
            redirectTo="https://www.kazoohr.com/"
          />
          Welcome pal!
        </Typography>
      </Paper>
      {currentRequest && (
        <PopUpFeedback feedback={currentRequest}></PopUpFeedback>
      )}
    </>
  );
};

export default LoggedInPage;
