import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

export const client = new ApolloClient({
  uri: 'http://localhost:8000/api',
  cache: new InMemoryCache()
});
