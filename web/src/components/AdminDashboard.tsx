import React from "react";
import { PageLayoutWide } from "@kazoohr/confetti";
import AdminDashboardCard from "./AdminDashboardCard";
import AdminDashboardHeader from "./AdminDashboardHeader";

const AdminDashboard: React.FC = () => {
  return (
    <PageLayoutWide>
      <AdminDashboardHeader />
      <AdminDashboardCard />
    </PageLayoutWide>
  );
};

export default AdminDashboard;
