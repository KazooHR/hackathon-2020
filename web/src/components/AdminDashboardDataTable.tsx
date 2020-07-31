import React from "react";
import { DataTable } from "@kazoohr/confetti";

import {
  EmployeeColumn,
  CollaborationColumn,
  TeamPlayerColumn,
  SuggestedActionColumn,
} from "./AdminDataTableColumns";

const AdminDashboardDataTable: React.FC = () => {
  const baseUrl =
    "https://yeistack-develop.s3.amazonaws.com/uploads/user_profile/image/";
  const avatarUrls = [
    `${baseUrl}5dd5831581bae5000e821077/size_160_akim_stewart.png`,
    `${baseUrl}5dd5834081bae5000e82107f/size_160_cassidy_jones.png`,
    `${baseUrl}5dd5832381bae5000e82107b/size_160_angela_lau.png`,
    `${baseUrl}5dd5835081bae5000e821083/size_160_gina_goodrich.png`,
  ];

  return (
    <div style={{ boxShadow: "none" }}>
      <DataTable
        showCheckboxes={false}
        onToggleSelectOne={() => {}}
        onToggleSelectAll={() => {}}
        isSelectAllChecked={true}
        selectedRowIds={[]}
        showExpansionToggles={false}
        expandedRowIds={[]}
        onToggleExpansionOne={() => {}}
        columns={[
          {
            header: "employee",
            renderCell: (data: any) => EmployeeColumn(data),
          },
          {
            header: "collaboration rating",
            renderCell: (data: any) => CollaborationColumn(data),
            alignment: "right",
          },
          {
            header: "team player rating",
            renderCell: (data: any) => TeamPlayerColumn(data),
            alignment: "right",
          },
          {
            header: "suggested action",
            renderCell: (data: any) => SuggestedActionColumn(data),
            alignment: "right",
          },
        ]}
        data={[
          {
            url: avatarUrls[0],
            name: "Akim Stewart",
            collaboratingRating: "3.75",
            trendUp: true,
            teamPlayerRating: "4.5",
            teamPlayerTrendUp: true,
            suggestedAction: "schedule sync-up",
          },
          {
            url: avatarUrls[1],
            name: "Cassidy Jones",
            collaboratingRating: "1",
            trendUp: false,
            teamPlayerRating: "2",
            teamPlayerTrendUp: true,
            suggestedAction: "special recognition",
          },
          {
            url: avatarUrls[2],
            name: "Angela Lau",
            collaboratingRating: "3.75",
            trendUp: true,
            teamPlayerRating: "4.5",
            teamPlayerTrendUp: true,
            suggestedAction: "create behavior bonus",
          },
          {
            url: avatarUrls[3],
            name: "Gina Goodrich",
            collaboratingRating: "3.75",
            trendUp: true,
            teamPlayerRating: "1.75",
            teamPlayerTrendUp: false,
            suggestedAction: "assign goal",
          },
        ]}
        dataKey={(id: any) => id}
      />
    </div>
  );
};

export default AdminDashboardDataTable;
