import {ApolloClient, createHttpLink} from "@apollo/client";

import {InMemoryCache} from "@apollo/client";

const apolloHttpLink = createHttpLink({
    uri: 'http://localhost:5000/graphql',
    credentials: 'include'
})
export const apolloClient = new ApolloClient({
  link: (apolloHttpLink),
    cache: new InMemoryCache(),
})

export default apolloClient

