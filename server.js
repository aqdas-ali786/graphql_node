import express from "express";
import { graphqlHTTP } from "express-graphql";
import graphQlSchema from "./src/schema/index.js";
import mongoose from "mongoose";

const app = express()

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQlSchema,
    // rootValue: graphQlResolvers,
    graphiql: true,
  })
)

const uri = `mongodb://localhost:27017`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose
  .connect(uri, options)
  .then(() => app.listen(4000, console.log("Server is listening on 4000")))
  .catch(error => {
    throw error
  })