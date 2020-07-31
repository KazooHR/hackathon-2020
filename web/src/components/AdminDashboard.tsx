import React from "react";
import { PageLayout } from "@kazoohr/confetti";
import AdminDashboardCard from "./AdminDashboardCard";
import AdminDashboardHeader from "./AdminDashboardHeader";

const AdminDashboard: React.FC = () => {
  return (
    <PageLayout style={{ position: 'absolute', left: '320px'}}>
      <AdminDashboardHeader />
      <AdminDashboardCard />
    </PageLayout>
  );
};

export default AdminDashboard;
