import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';

import theme, { cssVariables } from './theme';
import Root from './app/Root';
import ApolloWrapper from './components/providers/ApolloProvider';

ReactDOM.render(
  <ApolloWrapper>
    <ThemeProvider theme={{ ...theme, ...cssVariables }}>
      <CssBaseline />
      <Root />
    </ThemeProvider>
  </ApolloWrapper>,
  document.getElementById('root'),
);
