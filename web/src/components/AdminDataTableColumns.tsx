import React from 'react';

import { 
  ProfilePic, 
  Text
} from '@kazoohr/confetti';

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
export const CollaborationColumn = () => (<Text>column3</Text>);
export const TeamPlayerColumn = () => (<Text>column3</Text>);
export const SuggestedActionColumn = () => (<Text>column3</Text>);
