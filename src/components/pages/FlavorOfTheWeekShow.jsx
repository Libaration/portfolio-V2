import React, { useEffect } from 'react';
import {
  Flex,
  Text,
  Box,
  List,
  ListItem,
  ListIcon,
  Image,
  Link,
} from '@chakra-ui/react';
import { Badge } from '@chakra-ui/react';
import { FcOk } from 'react-icons/fc';
import flavoroftheweek from '../../assets/portfolio/flavoroftheweek.mov';
export default function FlavorOfTheWeekShow(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  props.setCurrentLocation('Flavor of the Week');
  return (
    <Flex w="100%" flexDirection="column" flexWrap="wrap">
      <Box p={5}>
        <Flex
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <video width="515" height="245" controls>
            <source src={flavoroftheweek} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Flex>
      </Box>
      <Box pl={5} pr={5}>
        {/* <Badge colorScheme="green">Demo</Badge>
          <Text as="span" pl={2} fontSize="sm" color="teal.500">
            View
          </Text> */}
        <br />
        <Badge colorScheme="green">Objective</Badge>
        <Text as="span" pl={2} fontSize="sm">
          Create a social music Rails application that uses Spotify API to allow
          users to share their current favorite song that week. Users can repost
          others flavors/songs as well as comment and post their own.
        </Text>
        <br />
        <Badge colorScheme="green">Stack</Badge>
        <Text as="span" pl={2} fontSize="sm">
          Javascript, Ruby, Rails
        </Text>
        <br />
        <Badge colorScheme="green">Github</Badge>
        <Text as="span" pl={2} fontSize="sm" color="teal.500">
          <Link href="https://github.com/Libaration/flavoroftheweek">
            Source
          </Link>
        </Text>
        <br />
        <Badge colorScheme="green">Details</Badge>
        <Text as="span" pl={2} fontSize="sm">
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FcOk} color="green.500" />
              Utilizes OAuth authentication to allow users to login via Spotify
            </ListItem>
            <ListItem>
              <ListIcon as={FcOk} color="green.500" />
              Uses 3rd party API's to load dynamic video background and play
              song on hover.
            </ListItem>
            <ListItem>
              <ListIcon as={FcOk} color="green.500" />
              Logins are maintained via session cookies on backend after
              authorization.
            </ListItem>
          </List>
        </Text>
      </Box>
    </Flex>
  );
}
