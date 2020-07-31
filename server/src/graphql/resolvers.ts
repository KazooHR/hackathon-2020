import { GraphQLScalarType } from "graphql";
import { UserInputError, AuthenticationError } from "apollo-server-express";

import { Resolvers } from "./types";
import Users from "../tables/Users";

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
    whoami: async (parent, args, context) => {
      if (!context.currentUser) {
        throw new AuthenticationError("You aren't logged in");
      }
      const user = await Users.getById(context.currentUser.email);

      if (!user) {
        throw new UserInputError("That user does not exist");
      }

      return {
        id: user.login_email,
        name: `${user.first_name} ${user.last_name}`,
        image: user.image,
        image160: user.image,
        image30: user.image,
        image70: user.image,
        initials: `${user.first_name.charAt(0)} ${user.last_name.charAt(0)}`,
        jobTitle: user.title || user.job_title,
        profileUrl: "#",
      };
    },
    currentRequest: async (parent, args, context) => {
      if (!context.currentUser) {
        throw new AuthenticationError("You aren't logged in");
      }

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
