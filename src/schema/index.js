import { makeExecutableSchema } from '@graphql-tools/schema';
import typeDefs from "../types/index.js";
import resolvers from "../resolvers/index.js";

export default  makeExecutableSchema({
  typeDefs,
  resolvers
}); 