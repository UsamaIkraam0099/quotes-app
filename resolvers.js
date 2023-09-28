// Others
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const User = mongoose.model("User");
const Quote = mongoose.model("Quote");

const resolvers = {
  Query: {
    users: async (_, {}, { userId }) => {
      if (!userId) throw new Error("Unauthorized. Please signin first.");

      const users = await User.find();
      if (users.length == 0) throw new Error("No record found.");

      return users;
    },

    quotes: async (_, {}, { userId }) => {
      if (!userId) throw new Error("Unauthorized. Please signin first.");

      const quotes = await Quote.find();

      if (quotes.length == 0) throw new Error("No record found.");

      return quotes;
    },

    user: async (_, { _id }, { userId }) => {
      if (!userId) throw new Error("Unauthorized. Please signin first.");

      const user = await User.findOne({ _id });
      if (!user) throw new Error("No record found.");

      return user;
    },

    quote: async (_, { by }, { userId }) => {
      if (!userId) throw new Error("Unauthorized. Please signin first.");

      const quotes = await Quote.find({ by });
      if (quotes.length == 0) throw new Error("No record found.");

      return quotes;
    },
  },

  User: {
    quotes: async (user) => {
      return (await Quote.find({ by: user._id })) || [];
    },
  },

  Mutation: {
    signUp: async (_, { user }) => {
      const userExist = await User.findOne({ email: user.email });

      if (userExist)
        throw new Error(`${userExist.email} is already exist. Please signin.`);

      const hash = await bcrypt.hash(user.password, 12);

      const alterUserDetails = { ...user, ...{ password: hash } };

      const newUser = User.create(alterUserDetails);

      return newUser;
    },

    signIn: async (_, { email, password }) => {
      const user = await User.findOne({ email: email });

      if (!user) throw new Error("Email does not exist.");

      const matchPassword = await bcrypt.compare(password, user.password);

      if (!matchPassword) throw new Error("Invalid email or password.");

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
      delete user.password;
      user["token"] = token;

      return user;
    },

    createQuote: async (_, { name }, { userId }) => {
      if (!userId) throw new Error("Unauthorized. Please signin first.");

      const quote = await Quote.create({
        name,
        by: userId,
      });

      if (!quote)
        throw new Error(
          "We are not able to create quote. Please try again later."
        );

      return quote;
    },
  },
};

export default resolvers;
