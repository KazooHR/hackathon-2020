import React from "react";
import { DataTable } from "@kazoohr/confetti";

import {
  EmployeeColumn,
  CollaborationColumn,
  TeamPlayerColumn,
  SuggestedActionColumn,
} from "./AdminDataTableColumns";

export function AdminDashboardDataTable({ setDrawerOpen }: { setDrawerOpen: (open: boolean) => void }) {
  const baseUrl =
    "https://yeistack-develop.s3.amazonaws.com/uploads/user_profile/image/";
  const avatarUrls = [
    `${baseUrl}5dd5831581bae5000e821077/size_160_akim_stewart.png`,
    `${baseUrl}5dd5834081bae5000e82107f/size_160_cassidy_jones.png`,
    `${baseUrl}5dd5832381bae5000e82107b/size_160_angela_lau.png`,
    `${baseUrl}5dd5835081bae5000e821083/size_160_gina_goodrich.png`,
  ];

  return (
    <DataTable
      withoutShadows
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
          renderCell: (data: any) => CollaborationColumn(data)
        },
        {
          header: "team player rating",
          renderCell: (data: any) => TeamPlayerColumn(data)
        },
        {
          header: " ",
          renderCell: (data: any) => SuggestedActionColumn(data, setDrawerOpen),
          alignment: "right",
        },
      ]}
      data={
        [
          {
            url: avatarUrls[0],
            name: 'Akim Stewart',
            collaboratingRating: '3.75',
            trendUp: true,
            teamPlayerRating: '4.50',
            teamPlayerTrendUp: true,
            suggestedAction: 'Send Special Recognition'
          },
          {
            url: avatarUrls[2],
            name: 'Angela Lau',
            collaboratingRating: '1.02',
            trendUp: false,
            teamPlayerRating: '2.06',
            teamPlayerTrendUp: true,
            suggestedAction: 'Schedule Sync-Up'
          },
          {
            url: avatarUrls[1],
            name: 'Cassidy Jones',
            collaboratingRating: '3.45',
            trendUp: true,
            teamPlayerRating: '4.53',
            teamPlayerTrendUp: true,
            suggestedAction: 'Create Behavior Bonus'
          },
          {
            url: avatarUrls[3],
            name: 'Gina Goodrich',
            collaboratingRating: '3.75',
            trendUp: true,
            teamPlayerRating: '1.75',
            teamPlayerTrendUp: false,
            suggestedAction: 'Assign Goal'
          }
        ]
      }
      dataKey={(id: any) => id}
    />
  );
};

export default AdminDashboardDataTable;
