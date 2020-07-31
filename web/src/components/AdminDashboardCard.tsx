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
} from "@kazoohr/confetti";

import AdminDashboardDataTable from "./AdminDashboardDataTable";
import AdminDashboardChart from "./AdminDashboardChart";

const AdminDashboardCard: React.FC = () => {
  return (
    <Card>
      <AdminDashboardChart />
      <Flex justifyContent="space-between">
        <FlexChild>
          <div
            style={{ border: "1px solid grey", height: "40px", width: "555px" }}
          >
            <Search
              onOpen={null}
              onClose={null}
              open={true}
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
        </FlexChild>
        <FlexChild>4 employees</FlexChild>
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
        <Pill
          avatarUser={null}
          icon={"caret_dn"}
          onClick={null}
          onClose={null}
          size="small"
          text="any group"
          variant="gray"
        />
        <Pill
          avatarUser={null}
          icon={"caret_dn"}
          onClick={null}
          onClose={null}
          size="small"
          text="any department"
          variant="gray"
        />
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
      <Spacer orientation="vertical" outline size="default" />
      <AdminDashboardDataTable />
    </Card>
  );
};

export default AdminDashboardCard;
