import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

console.log("application mode: ", process.env.NODE_ENV);
console.log("application PORT: ", process.env.PORT);

let appMode = process.env.NODE_ENV || "development";

export const client = new ApolloClient({
  uri:
    appMode !== "development"
      ? "https://shelters-app.herokuapp.com/api"
      : "http://localhost:8000/api",
  cache: new InMemoryCache()
});
