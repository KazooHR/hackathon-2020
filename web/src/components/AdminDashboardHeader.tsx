import React from "react";
import { Header, Spacer, Tab, Tabs } from "@kazoohr/confetti";

const AdminDashboardHeader: React.FC = () => {
  return (
    <>
      <Header 
        level="1"
        size="h1"
      >
      Talent IQ
      </Header>  
      <Header 
        level="3"
        size="h3"
      >
      Compare feedback ratings with key drivers to keep your employees engaged and growing.
      </Header>      
      <Tabs
        onChange={null}
        responsiveDropdown={false}
        value="all employees"
      >
        <Tab
          active={false}
          onClick={null}
          value="engagement indicators"
        >
          engagement indicators
        </Tab>
        <Tab
          active={false}
          onClick={null}
          value="key strengths"
        >
          key strengths
        </Tab>
        <Tab
          active={false}
          onClick={null}
          value="engagement networks"
        >
          engagement networks
        </Tab>
      </Tabs>
      <Spacer orientation="vertical" size="default" />
      
    </>
  );
};

export default AdminDashboardHeader;
