import React, { useState } from "react";
import { Drawer, PageLayoutWide } from "@kazoohr/confetti";
import AdminDashboardCard from "./AdminDashboardCard";
import AdminDashboardHeader from "./AdminDashboardHeader";

const AdminDashboard: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <PageLayoutWide style={{ position: 'relative'}}>
      <AdminDashboardHeader />
      <AdminDashboardCard setDrawerOpen={setDrawerOpen}/>
      <button onClick={() => setDrawerOpen(false)}>
        <div className={drawerOpen ? "syncUpDrawer" : "hiddenSyncUpDrawer"}>
          <Drawer
            ariaLabel="syncUpDrawer"
            isOpen={drawerOpen}
            onSetOpen={() => setDrawerOpen(true)}
          >
            <div style={{ overflowY: 'hidden' }}>
              <img
                src='./sync-up.png'
                alt=''
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </Drawer>
        </div>
      </button>
    </PageLayoutWide>
  );
};

export default AdminDashboard;
