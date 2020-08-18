import React from 'react';

import ApolloWrapper from './configureStore';
import Home from '../components/pages/Home';

export default function App() {
  return (
    <ApolloWrapper>
      <Home />
    </ApolloWrapper>
  );
}
