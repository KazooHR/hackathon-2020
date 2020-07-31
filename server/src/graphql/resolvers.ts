import { GraphQLScalarType } from "graphql";
import { UserInputError, AuthenticationError } from "apollo-server-express";

import { Resolvers } from "./types";
import Users, { userToPerson } from "../tables/Users";

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
  RealtimeFeedbackRequest: {
    subject: async (parent) => {
      const users = await Users.get({ login_email: parent.subjectId });

      if (!users || users.length === 0) {
        throw new UserInputError("That user does not exist");
      }

      const user = users[0];
      return userToPerson(user);
    },
  },
  Query: {
    whoami: async (_parent, _args, context) => {
      if (!context.currentUser) {
        throw new AuthenticationError("You aren't logged in");
      }
      const users = await Users.get({ login_email: context.currentUser.email });

      if (!users || users.length === 0) {
        throw new UserInputError("That user does not exist");
      }

      return userToPerson(users[0]);
    },
    currentRequest: async (_parent, _args, context) => {
      if (!context.currentUser) {
        throw new AuthenticationError("You aren't logged in");
      }

      return {
        id: "82c5ee4a-a18f-569a-9421-c26937a146be",
        subjectId: "alex.maingot@kazoohr.com",
        action: "You recently completed a goal with",
        question: "What do you think about this person's",
        value: "communication",
        snoozeCount: 0,
      } as any;
    },
  },
};

export default resolvers;
