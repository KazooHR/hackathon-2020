import React from "react";
import { PageLayout } from '@kazoohr/confetti';
import AdminDashboardCard from './AdminDashboardCard';
import AdminDashboardHeader from './AdminDashboardHeader';

const AdminDashboard: React.FC = () => {

  return (
    <PageLayout>
      <AdminDashboardHeader />
      <AdminDashboardCard />
    </PageLayout>
  );
};

export default AdminDashboard;

