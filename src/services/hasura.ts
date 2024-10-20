import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: 'https://your-graphql-endpoint/v1/graphql',
    credentials: 'same-origin',
    headers: {
      'x-hasura-admin-secret': `your-admin-secret`,
    },
  }),
  cache: new InMemoryCache(),
});
export default client;