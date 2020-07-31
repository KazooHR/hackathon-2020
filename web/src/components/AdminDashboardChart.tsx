import React from "react";
import { Card } from "@kazoohr/confetti";

const AdminDashboardChart: React.FC = () => {
  return (
    <Card 
      className="" 
      withBorder 
      noShadow
      style={{ margin: 0, padding: 0 }}
    >
      <img 
        src="./skills-driver.png" 
        style={{ width: '100%', height: 'auto'}}
        alt=""
      />
    </Card>
  );
};

export default AdminDashboardChart;
