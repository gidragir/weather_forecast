import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Layout from './components/layout/layout.tsx'
import './scss/_index.scss'
import { ApolloClient, InMemoryCache, ApolloProvider, gql, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: '/graphql',
    headers:{
      'content-type': 'application/json',
    }
  }),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={ client }>
    <Layout>
      <App />
    </Layout>
  </ApolloProvider>,
)
