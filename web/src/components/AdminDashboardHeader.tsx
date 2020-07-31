import React from "react";
import { Header, Spacer, Tab, Tabs } from "@kazoohr/confetti";

const AdminDashboardHeader: React.FC = () => {
  return (
    <div style={{ width: '984px', zIndex: 100, marginTop: '100px'}}>
      <Header 
        level="1"
        size="h1"
        style={{ fontSize: '32px', fontWeight: '300'}}
      >
      Talent IQ
      </Header>
      <Spacer orientation="vertical" size="default" />
      <Header 
        level="4"
        size="h4"
      >
      Compare feedback ratings with key drivers to keep your employees engaged and growing.
      </Header>
      <Spacer orientation="vertical" size="default" />
      <Tabs
        onChange={null}
        responsiveDropdown={false}
        value="engagement indicators"
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
      
    </div>
  );
};

export default AdminDashboardHeader;
