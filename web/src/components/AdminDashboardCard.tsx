import React from "react";
import { 
  Card, 
  Icon,
  Input, 
  Pagination,
  Search, 
  Text 
} from "@kazoohr/confetti";

import AdminDashboardDataTable from './AdminDashboardDataTable';

const AdminDashboardCard: React.FC = () => {

  return (
    <Card>
      <div>
        <Search
          onOpen={null}
          onClose={null}
          open={true}
          buttonId={"search"}
        >
          <Input
            compact
            id="search-input"
            onChange={null}
            value="Search"
          />
          <Icon 
            className=""
            color=""
            icon="filter"
            size={24}
            variant="regular" 
          />
        </Search>
        <Text>
        4 employees
        </Text>
        <Pagination
          current={1}
          id="test-pager"
          onPage={null}
          onQty={null}
          qtyOptions={[
            {
              label: '1',
              value: '1'
            }
          ]}
          selectedQty="1"
          total={1}
        />
      </div>
      <AdminDashboardDataTable />
    </Card>
  );
};


export default AdminDashboardCard;