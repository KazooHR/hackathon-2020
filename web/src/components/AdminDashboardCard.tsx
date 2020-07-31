import React from "react";
import {
  Card,
  Flex,
  FlexChild,
  Icon,
  Pagination,
  Pill,
  Search, 
  Spacer,
  UtilityText
} from "@kazoohr/confetti";

import AdminDashboardDataTable from "./AdminDashboardDataTable";
import AdminDashboardChart from "./AdminDashboardChart";

const AdminDashboardCard: React.FC = () => {
  return (
    <Card style={{ width: '984px'}}>
      <Flex justifyContent="space-between">
        <Flex justifyContent="space-between">
          <div style={{ border: '1px solid #C6C6C6', height: '40px', width: '555px'}}>
            <Search
              onOpen={null}
              onClose={null}
              open={false}
              buttonId={"search"}
            >
              {}
            </Search>
            <Icon
              className=""
              color=""
              icon="filter"
              size={24}
              variant="regular"
            />
          </div>
        </Flex>
        <UtilityText size='small'>
          4 EMPLOYEES
        </UtilityText>
        <FlexChild>
          <Pagination
            current={1}
            id="test-pager"
            onPage={null}
            onQty={null}
            qtyOptions={[
              {
                label: "1",
                value: "1",
              },
            ]}
            selectedQty="1"
            total={1}
          />
        </FlexChild>
      </Flex>
      <Flex>
        <Pill
          avatarUser={null}
          icon={"caret_dn"}
          onClick={null}
          onClose={null}
          size="small"
          text="1 reports up to"
          variant="gray"
        />
        <Spacer orientation="horizontal" size="small" />
        <Pill
          avatarUser={null}
          icon={"caret_dn"}
          onClick={null}
          onClose={null}
          size="small"
          text="any group"
          variant="gray"
        />
        <Spacer orientation="horizontal" size="small" />
        <Pill
          avatarUser={null}
          icon={"caret_dn"}
          onClick={null}
          onClose={null}
          size="small"
          text="any department"
          variant="gray"
        />
        <Spacer orientation="horizontal" size="small" />
        <Pill
          avatarUser={null}
          icon={"caret_dn"}
          onClick={null}
          onClose={null}
          size="small"
          text="any location"
          variant="gray"
        />
      </Flex>
      <Spacer orientation="vertical" size="default" />
      <AdminDashboardChart />
      <Spacer orientation="vertical" size="default" />
      
      <AdminDashboardDataTable />
    </Card>
  );
};

export default AdminDashboardCard;
