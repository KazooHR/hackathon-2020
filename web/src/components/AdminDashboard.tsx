import React from "react";

import AdminDashboardCard from './AdminDashboardCard';
import AdminDashboardHeader from './AdminDashboardHeader';

const AdminDashboard: React.FC = () => {

  return (
    <>
      <AdminDashboardHeader />
      <AdminDashboardCard />
    </>
  );
};

export default AdminDashboard;

