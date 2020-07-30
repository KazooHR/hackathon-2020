import React from 'react';

import { 
  Icon,
  ProfilePic, 
  Text
} from '@kazoohr/confetti';

import styles from './AdminDataTableColumns.scss';

export const EmployeeColumn = ({ url, name }: any) => {
  return (
    <>
      <ProfilePic
        dimensions={undefined}
        size="MEDIUM"
        user={{ 
          image160: `${url}`,
          name: `${name}`
        }}
      />
      <Text>{`${name}`}</Text>
    </>
  );
};
export const CollaborationColumn = ({ collaboratingRating, trendUp }: any) => {
  return (
    <>
      <Text>{`${collaboratingRating}`}</Text>
      <Icon 
        icon={trendUp ? 'trend_up' : 'trend_down'}
        className={styles['trend']}
        color={trendUp ? '#00A861' : '#F3224D'}
        variant="filled"
      />
    </>
  );
};
export const TeamPlayerColumn = ({ teamPlayerRating }: any) => {
  return(<Text>{`${teamPlayerRating}`}</Text>);
};
export const SuggestedActionColumn = ({ suggestedAction }: any) => {
  return(<Text>{`${suggestedAction}`}</Text>);
};
