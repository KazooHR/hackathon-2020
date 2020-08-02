import React, { useState } from "react";
import { Drawer, DrawerFooter, PageLayoutWide } from "@kazoohr/confetti";
import AdminDashboardCard from "./AdminDashboardCard";
import AdminDashboardHeader from "./AdminDashboardHeader";

const AdminDashboard: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <PageLayoutWide style={{ position: 'relative'}}>
      <AdminDashboardHeader />
      <AdminDashboardCard setDrawerOpen={setDrawerOpen}/>
        <div className={drawerOpen ? "syncUpDrawer" : "hiddenSyncUpDrawer"}>
          <Drawer
            ariaLabel="syncUpDrawer"
            isOpen={drawerOpen}
            onSetOpen={() => setDrawerOpen(true)}
            action={
              <DrawerFooter
                closeText="Cancel"
                onClose={() => setDrawerOpen(false)}
                onSave={() => console.log('Saving...')}
                saveText="Save"
              />
            }
            title="New Sync-up"
          >
            <div>
              <img
                  src='./sync-up_min.png'
                  alt=''
                  style={{ width: '100%', height: 'auto' }}
                />
            </div>
          </Drawer>
        </div>
    </PageLayoutWide>
  );
};

export default AdminDashboard;
