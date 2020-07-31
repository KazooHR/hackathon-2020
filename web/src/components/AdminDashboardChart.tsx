import React from "react";
import { CardMedia } from "@material-ui/core";
import { Card } from '@kazoohr/confetti';

const AdminDashboardChart: React.FC = () => {

  return (
    <Card
      className=""
      withBorder
      noShadow
    >
      <CardMedia 
        style={{ width: 700, height: 500 }} 
        image={require('web/public/skills-driver.png')}
      />
    </Card>
  );
};

export default AdminDashboardChart;
