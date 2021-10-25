import React from 'react';
import Banner from './components/Banner.jsx';
import Portfolio from './components/Portfolio.jsx';
import BlenderHeader from './components/BlenderHeader';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <>
      <Banner />
      <Switch>
        <Route exact path="/">
          <BlenderHeader />
          <About />
        </Route>

        <Route path="/portfolio">
          <Portfolio />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
