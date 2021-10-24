import React from 'react';
import Banner from './components/Banner.jsx';
import Portfolio from './components/Portfolio.jsx';
import BlenderHeader from './components/BlenderHeader';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import { Flex, Box } from '@chakra-ui/react';
import { Switch, Route, Link } from 'react-router-dom';
function App() {
  return (
    <>
      <Banner />
      <BlenderHeader />
      <Flex justifyContent="center">
        <Box maxWidth={900}>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
        </Box>
      </Flex>
      <Footer />
    </>
  );
}

export default App;
