import React, { useState, useEffect } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import AllProjects from '../components/pages/AllProjects';
import Estateauction from '../components/pages/Estateauction';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import { BiRightArrowAlt } from 'react-icons/bi';
import { motion } from 'framer-motion';
import HabboShow from './pages/HabboShow';
import FeedDesignerShow from './pages/FeedDesignerShow';
import FlavorOfTheWeekShow from './pages/FlavorOfTheWeekShow';
import CrudSpaceShow from './pages/CrudSpaceShow';
import MarketMountain from './pages/MarketMountain';
export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let match = useRouteMatch();
  const MotionBox = motion(Box);
  const [currentLocation, setCurrentLocation] = useState('');

  const coloredLocation = () => {
    return (
      <Flex alignItems="center">
        <Link to="/portfolio">
          <Text color="teal.500">Works </Text>
        </Link>
        <BiRightArrowAlt />
        <Text fontSize="lg" fontWeight="bold">
          {currentLocation}
        </Text>
      </Flex>
    );
  };
  return (
    <>
      <MotionBox
        initial={{ opacity: 0, y: 500 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 500 }}
        transition={{ ease: 'easeIn', duration: 0.2 }}
        key={Math.random()}
      >
        <Flex
          justifyContent="center"
          mt={20}
          flexDirection="column"
          alignItems="center"
        >
          <Flex
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
            maxWidth={800}
          >
            <Box w="100%" zIndex={2}>
              <Text textAlign="left" p={3} size="sm">
                {currentLocation ? (
                  coloredLocation()
                ) : (
                  <Text fontWeight="bold" fontSize="lg">
                    Works
                  </Text>
                )}
              </Text>
            </Box>

            <Switch>
              <Route path={`${match.path}/estateAuction`}>
                <Estateauction setCurrentLocation={setCurrentLocation} />
              </Route>
              <Route path={`${match.path}/habbo`}>
                <HabboShow setCurrentLocation={setCurrentLocation} />
              </Route>
              <Route path={`${match.path}/feeddesigner`}>
                <FeedDesignerShow setCurrentLocation={setCurrentLocation} />
              </Route>
              <Route path={`${match.path}/flavoroftheweek`}>
                <FlavorOfTheWeekShow setCurrentLocation={setCurrentLocation} />
              </Route>
              <Route path={`${match.path}/crudspace`}>
                <CrudSpaceShow setCurrentLocation={setCurrentLocation} />
              </Route>
              <Route path={`${match.path}/marketmountain`}>
                <MarketMountain setCurrentLocation={setCurrentLocation} />
              </Route>

              <AllProjects setCurrentLocation={setCurrentLocation} />
            </Switch>
          </Flex>
        </Flex>
      </MotionBox>
    </>
  );
}
