import React, {useState} from "react";
import { Typography } from "@material-ui/core";
import { Logo, Card, PageLayoutWide } from "@kazoohr/confetti";

import {PopUpFeedback, PopUpFeedbackProps} from "./PopUpFeedback/Feedback";
import { useCurrentRequestQuery, useWhoAmIQuery } from "../graphql/hooks";

const LoggedInPage: React.FC = () => {
  const whoamiResult = useWhoAmIQuery();
  const [isOpen, setIsOpen] = useState(true);
  const { data, refetch } = useCurrentRequestQuery();
  const { currentRequest } = data || {};

  return (
    <>
      <PageLayoutWide>
        <Card>
          <Typography align="center" variant="h2" color="secondary">
            <Logo
              companyName="Kazoo"
              imgUrl="https://www.kazoohr.com/wp-content/themes/kazoo2019/assets/dist/images/Kazoo_Logo_Primary_Green.png"
              redirectTo="https://www.kazoohr.com/"
            />
            <br/>
            Welcome {whoamiResult.data?.whoami.name || "pal"}!
          </Typography>
        </Card>
      </PageLayoutWide>
      { currentRequest && (
        <PopUpFeedback currentFeedback={currentRequest} isOpen={isOpen} setIsOpen={setIsOpen} refetch={refetch}></PopUpFeedback>
      )}
    </>
  );
};

export default LoggedInPage;
