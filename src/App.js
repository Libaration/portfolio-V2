import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Banner from './components/Banner.jsx';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Banner />
    </ChakraProvider>
  );
}

export default App;
