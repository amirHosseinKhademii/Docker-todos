import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

import { setContext } from '@apollo/client/link/context'
import 'cross-fetch/polyfill'

const httpLink = createHttpLink({
  uri: 'http://localhost:5000',
})

const authLink = setContext((_, { headers }) => {
  const authorization =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjQxZTQ2ODI1Yjg5MzViMTNiNzVlYSIsImVtYWlsIjoiZW1haWxAZXhhbXBsZS5jb20iLCJ1c2VyTmFtZSI6InNvdXJlbmEiLCJpYXQiOjE2NDQ0ODg3NDIsImV4cCI6MTY0NDg0ODc0Mn0.KQFcuzZMKu9duoTRA4aY6n7OVBzOA9as0RnmRKYQFuA'
  return {
    headers: {
      ...headers,
      authorization,
    },
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
