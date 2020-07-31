import gql from "graphql-tag";

export const SNOOZE_FEEDBACK = gql`
  mutation {
      snoozeFeedback(requestId: $id)
  }
`;
