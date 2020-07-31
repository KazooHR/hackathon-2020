import { GraphQLScalarType } from "graphql";
import { UserInputError } from "apollo-server-express";

import { Resolvers } from "./types";

const resolvers: Resolvers = {
  DateTime: new GraphQLScalarType({
    name: "DateTime",
    description: "Date time represented as an ISO String",
    parseValue: (value) => {
      try {
        return new Date(value);
      } catch (e) {
        throw new UserInputError("Invalid DateTime input");
      }
    },
    serialize: (value: Date) => {
      return value.toISOString();
    },
  }),
  Query: {
    currentRequest: async (parent, args, context) => {
      return {
        id: "82c5ee4a-a18f-569a-9421-c26937a146be",
        subjectId: "c6e145dd-29ef-5dfa-91c9-5d1f6cff04c8",
        subject: {
          id: "c6e145dd-29ef-5dfa-91c9-5d1f6cff04c8",
          image:
            "https://s3.amazonaws.com/uifaces/faces/twitter/shinze/128.jpg",
          image160:
            "https://s3.amazonaws.com/uifaces/faces/twitter/lisovsky/128.jpg",
          image30:
            "https://s3.amazonaws.com/uifaces/faces/twitter/salvafc/128.jpg",
          image70:
            "https://s3.amazonaws.com/uifaces/faces/twitter/peterlandt/128.jpg",
          initials: "EG",
          jobTitle: "Regional Response Engineer",
          name: "Eleanor Garner",
          profileUrl: "#",
        },
        action: "You recently completed a goal with",
        question: "What do you think about this person's",
        value: "credibility",
        snoozeCount: 0,
      };
    },
  },
};

export default resolvers;
