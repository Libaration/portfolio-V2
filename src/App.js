import React from 'react';
import Banner from './components/Banner.jsx';
import BlenderHeader from './components/BlenderHeader';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import { Flex, Box } from '@chakra-ui/react';
function App() {
  return (
    <>
      <Banner />
      <BlenderHeader />
      <Flex justifyContent="center">
        <Box maxWidth={900}>
          <About />
        </Box>
      </Flex>
      <Footer />
    </>
  );
}

export default App;
