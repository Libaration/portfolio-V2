import { ChakraProvider } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './extendTheme';
import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.render(
  <StrictMode>
    <Router>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);
