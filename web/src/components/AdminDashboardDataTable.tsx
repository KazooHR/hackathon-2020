import React from "react";
import { 
  DataTable
} from "@kazoohr/confetti";

import {
  EmployeeColumn,
  CollaborationColumn,
  TeamPlayerColumn,
  SuggestedActionColumn
} from './AdminDataTableColumns';

const AdminDashboardDataTable: React.FC = () => {
  const baseUrl = 'https://yeistack-develop.s3.amazonaws.com/uploads/user_profile/image/';
  const avatarUrls = [
    `${baseUrl}5dd5831581bae5000e821077/size_160_akim_stewart.png`,
    `${baseUrl}5dd5834081bae5000e82107f/size_160_cassidy_jones.png`,
    `${baseUrl}5dd5832381bae5000e82107b/size_160_angela_lau.png`,
    `${baseUrl}5dd5835081bae5000e821083/size_160_gina_goodrich.png` 
  ];
  
  return (
    <DataTable
      showCheckboxes
      onToggleSelectOne={() => {}}
      onToggleSelectAll={() => {}}
      isSelectAllChecked={true}
      selectedRowIds={[]}
      showExpansionToggles
      expandedRowIds={[]}
      onToggleExpansionOne={() => {}}
      columns={[
        {
          header: 'employee',
          renderCell: (data: any) => (EmployeeColumn(data))
        },
        { 
          header: 'collaboration rating', 
          renderCell: (data: any) => (CollaborationColumn(data))
        },
        {
          header: 'team player rating',
          renderCell: () => (TeamPlayerColumn)
        },
        {
          header: 'suggested action',
          renderCell: () => (SuggestedActionColumn)
        }
      ]}
      data={
        [
          { 
            url: avatarUrls[0], 
            name: 'Akim Stewart', 
            collaboratingRating: '3.75',
            trendUp: true,
            teamPlayerRating: '4.5',
            suggestedAction: 'schedule sync-up'
          }, 
          { 
            url: avatarUrls[1], 
            name: 'Cassidy Jones', 
            collaboratingRating: '1',
            trendUp: false,
            teamPlayerRating: '2',
            suggestedAction: 'special recognition'
          }, 
          { 
            url: avatarUrls[1], 
            name: 'Angela Lau', 
            collaboratingRating: '3.75',
            trendUp: true,
            teamPlayerRating: '4.5',
            suggestedAction: 'create behavior bonus'
          }, 
          { 
            url: avatarUrls[1], 
            name: 'Gina Goodrich', 
            collaboratingRating: '3.75',
            trendUp: true,
            teamPlayerRating: '1.75',
            suggestedAction: 'assign goal'      
          }
        ]
      }
      dataKey={(id: any) => id}
    />
  );
};


export default AdminDashboardDataTable;