const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const mongoose = require("mongoose");
const path = require('path');

const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@mongodbbase-r2irl.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

const Schema = require("./shelter-app-backend/schema/schema");
const Resolvers = require("./shelter-app-backend/resolvers/resolvers");
const isAuth = require("./shelter-app-backend/middleware/is-auth");

const port = process.env.PORT || 8000;

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

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'shelter-app/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/shelter-app/build/index.html'));
});

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
    app.listen(port, (res, req) => {
      console.log(process.env.NODE_ENV);
      console.log(`server listening on port ${port}`);
    });
  })
  .catch(err => {
    console.log(err);
  });
