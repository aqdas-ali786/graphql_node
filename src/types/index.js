import {mergeTypeDefs} from '@graphql-tools/merge';
import post from "./post.js";
import comment from "./comment.js";
import user from "./user.js";

const types = [post, comment,user];

const mergedTypes = mergeTypeDefs(types);

export default mergedTypes;