import React from "react";

import {
  Button,
  Icon,
  Grid,
  GridItem,
  ProfilePic,
  Spacer,
  Text,
} from "@kazoohr/confetti";

import styles from "./AdminDataTableColumns.scss";

export const EmployeeColumn = ({ url, name }: any) => {
  return (
    <Grid>
      <GridItem width={8}>
        <ProfilePic
          dimensions={undefined}
          size="MEDIUM"
          user={{
            image160: `${url}`,
            name: `${name}`,
          }}
        />
      </GridItem>
      <GridItem width={16}>
        <Text size='small'>{`${name}`}</Text>
      </GridItem>
    </Grid>
  );
};
export const CollaborationColumn = ({ collaboratingRating, trendUp }: any) => {
  return (
    <>
      <Text size='small'>{`${collaboratingRating}`}</Text>
      <Spacer
        orientation="horizontal"
        size="small"
      />
      <Icon 
        icon={trendUp ? 'trend_up' : 'trend_down'}
        className={styles['trend']}
        color={trendUp ? '#00A861' : '#F3224D'}
        variant="filled"
      />
    </>
  );
};
export const TeamPlayerColumn = ({
  teamPlayerRating,
  teamPlayerTrendUp,
}: any) => {
  return (
    <>
      <Text size='small'>{`${teamPlayerRating}`}</Text>
      <Spacer
        orientation="horizontal"
        size="small"
      />
      <Icon 
        icon={teamPlayerTrendUp ? 'trend_up' : 'trend_down'}
        className={styles['trend']}
        color={teamPlayerTrendUp ? '#00A861' : '#F3224D'}
        variant="filled"
      />
    </>
  );
};
export const SuggestedActionColumn = ({ suggestedAction }: any, setModalOpen: any) => {
  return(
    <Button 
      size='small' 
      style={
        { 
          color: '#2A5CDB', 
          border: '1px solid #2A5CDB', 
          fontSize: '12px'
        }
      }
      onClick={() => setModalOpen(true)}
    >
      {`${suggestedAction}`}
    </Button>
  );
};
