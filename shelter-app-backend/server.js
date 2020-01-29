const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const mongoose = require("mongoose");

const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@mongodbbase-r2irl.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

const Schema = require("./schema/schema");
const Resolvers = require("./resolvers/resolvers");
const isAuth = require("./middleware/is-auth");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "10mb" }));

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, PATCH, DELETE, GET"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(isAuth);

app.use(
  "/api",
  graphqlHttp({
    schema: Schema,
    rootValue: Resolvers,
    graphiql: true
  })
);

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
  })
  .then(() => {
    app.listen(8000);
  })
  .catch(err => {
    console.log(err);
  });
