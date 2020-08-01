import React, {useState} from "react";
import { Logo, Card, PageLayoutWide, Header } from "@kazoohr/confetti";

import {PopUpFeedback, PopUpFeedbackProps} from "./PopUpFeedback/Feedback";
// import { mockWendysReq } from "./PopUpFeedback/mockData";
import { useCurrentRequestQuery, useWhoAmIQuery } from "../graphql/hooks";
// let i = 1;

const LoggedInPage: React.FC = () => {
  const whoamiResult = useWhoAmIQuery();
  const [isOpen, setIsOpen] = useState(true);
  const { data, refetch } = useCurrentRequestQuery();
  const { currentRequest } = data || {};
  // const wendyData: PopUpFeedbackProps[] = mockWendysReq;
  // const wendyRefetch = async () => {
  //       if (i === mockWendysReq.length) i = 0;
  //     return {
  //         data: {
  //             currentRequest: mockWendysReq[i++]
  //         }
  //     }
  // };

  return (
    <>
      <PageLayoutWide>
        <Card>
          <Header
            level="1"
            size="h1"
            className="helloDiv">
              <Logo
                companyName="Kazoo"
                imgUrl="https://www.kazoohr.com/wp-content/themes/kazoo2019/assets/dist/images/Kazoo_Logo_Primary_Green.png"
                redirectTo="https://www.kazoohr.com/"
              />
              <br/>
              Welcome {whoamiResult.data?.whoami.name || "pal"}!
          </Header>
        </Card>
      </PageLayoutWide>
      { currentRequest && (
        // <PopUpFeedback currentFeedback={wendyData[0]} isOpen={isOpen} setIsOpen={setIsOpen} refetch={wendyRefetch}></PopUpFeedback>
          <PopUpFeedback currentFeedback={currentRequest} isOpen={isOpen} setIsOpen={setIsOpen} refetch={refetch}></PopUpFeedback>
      )}
    </>
  );
};

export default LoggedInPage;
