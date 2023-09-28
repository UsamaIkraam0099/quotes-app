import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

// Others
import "dotenv/config.js";
import { context } from "./utils.js";
import { connect } from "./config/index.js";

import "./src/models/user.js";
import "./src/models/quotes.js";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";

connect();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: context,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
