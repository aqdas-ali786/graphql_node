import { mergeResolvers } from '@graphql-tools/merge';

import comment from "./comment.js";
import user from "./user.js";
import post from "./post.js";

const resolvers = [comment,user,post];

export default mergeResolvers(resolvers);