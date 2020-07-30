import React from "react";
import { 
  Header, 
  Tab, 
  Tabs
} from "@kazoohr/confetti";

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
        value="all employees"
      >
        <Tab
          active={false}
          onClick={null}
          value="all employees"
        >
          all employees
        </Tab>
        <Tab
          active={false}
          onClick={null}
          value="departments"
        >
          departments
        </Tab>
        <Tab
          active={false}
          onClick={null}
          value="locations"
        >
          locations
        </Tab>
        <Tab
          active={false}
          onClick={null}
          value="groups"
        >
          groups
        </Tab>
      </Tabs>
    </>
  );
};

export default AdminDashboardHeader;
