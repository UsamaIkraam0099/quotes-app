// Others
import { users, quotes } from "../../fakeDB";

const resolvers = {
  Query: {
    users: () => {
      return users;
    },

    quotes: () => {
      return quotes;
    },

    user: (_, { id }) => {
      return users.find((user) => user.id === id);
    },

    quote: (_, { by }) => {
      return quotes.filter((quote) => quote.by === by);
    },
  },

  User: {
    quotes: (user) => {
      return quotes.find((quote) => quote.by === user.id);
    },
  },
};

export default resolvers;
