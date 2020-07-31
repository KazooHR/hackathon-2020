import { GraphQLScalarType } from "graphql";
import { UserInputError, AuthenticationError } from "apollo-server-express";
import { v4 as uuid } from "uuid";

import { Resolvers } from "./types";
import Users, { userToPerson } from "../tables/Users";
import FeedbackRequests from "../tables/FeedbackRequests";
import Feedback from "../tables/Feedback";

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
  FeedbackGiven: {
    subject: async (parent) => {
      const [user] = await Users.get({
        queryParams: { login_email: parent.subjectId },
      });
      return userToPerson(user);
    },
  },
  Query: {
    whoami: async (_parent, _args, context) => {
      if (!context.currentUser) {
        throw new AuthenticationError("You aren't logged in");
      }
      const users = await Users.get({
        queryParams: { login_email: context.currentUser.email },
      });

      if (!users || users.length === 0) {
        throw new UserInputError("That user does not exist");
      }

      return userToPerson(users[0]);
    },
    currentRequest: async (_parent, _args, context) => {
      if (!context.currentUser) {
        throw new AuthenticationError("You aren't logged in");
      }

      const users = await Users.get({
        queryParams: {
          company_id: "52e9e22f549d52e7a1000001",
          active: true,
        },
      });
      const randomUserIndex = Math.round(Math.random() * users.length);
      const user = users[randomUserIndex];

      const feedbackRequest = {
        id: uuid(),
        userId: context.currentUser.email,
        subjectId: user.login_email,
        action: "You recently completed a goal with",
        question: "What do you think about this person's",
        value: "communication",
        requestedAt: new Date(),
      };

      await FeedbackRequests.insert([feedbackRequest]);

      return {
        ...feedbackRequest,
        subject: userToPerson(user),
        snoozeCount: 0,
      };
    },
    ratings: async (_parent, _args, context) => {
      if (!context.currentUser) {
        throw new AuthenticationError("You aren't logged in");
      }

      const feedbacks = await Feedback.get({
        queryParams: {},
        useCache: false,
      });
      return feedbacks;
    },
  },
  Mutation: {
    snoozeFeedback: () => "Darn! We'll get you next time!",
    rateSomeone: async (_parent, args, context) => {
      if (!context.currentUser) {
        throw new AuthenticationError("You aren't logged in");
      }

      const { requestId, rating, comment } = args.input;

      const [request] = await FeedbackRequests.get({
        queryParams: { id: requestId },
      });

      await Feedback.insert([
        {
          ...request,
          id: uuid(),
          requestId,
          rating,
          comment,
          respondedAt: new Date(),
        },
      ]);

      return "Thank you for giving your input!";
    },
  },
};

export default resolvers;
