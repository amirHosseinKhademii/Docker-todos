import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

import { setContext } from '@apollo/client/link/context'
import 'cross-fetch/polyfill'

const httpLink = createHttpLink({
  uri: 'http://localhost:5000',
})

const authLink = setContext((_, { headers }) => {
  const authorization =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjQxZTQ2ODI1Yjg5MzViMTNiNzVlYSIsImVtYWlsIjoiZW1haWxAZXhhbXBsZS5jb20iLCJ1c2VyTmFtZSI6InNvdXJlbmEiLCJpYXQiOjE2NDY0OTg3NDgsImV4cCI6MTY0Njg1ODc0OH0.PQW4XETTl1dxF7P6on5cwn4aLgDQxuHoHLWfEiPqgzQ"
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
