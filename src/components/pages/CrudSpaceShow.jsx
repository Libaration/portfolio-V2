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
import crudspace from '../../assets/portfolio/crudspace.mp4';
import ReactPlayer from 'react-player/lazy';
export default function CrudSpaceShow(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  props.setCurrentLocation('CRUDSpace');
  return (
    <Flex w="100%" flexDirection="column" flexWrap="wrap">
      <Box p={5}>
        <Flex
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <ReactPlayer
            url="https://streamable.com/dqvw7o"
            width="100%"
            controls="true"
          />
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
          Recreate MySpace as is it was in 2005 to gain a deeper knowledge of
          CRUD design.
        </Text>
        <br />
        <Badge colorScheme="green">Stack</Badge>
        <Text as="span" pl={2} fontSize="sm">
          Ruby, Sinatra
        </Text>
        <br />
        <Badge colorScheme="green">Github</Badge>
        <Text as="span" pl={2} fontSize="sm" color="teal.500">
          <Link href="https://github.com/Libaration/CRUDspace">Source</Link>
        </Text>
        <br />
        <Badge colorScheme="green">Details</Badge>
        <Text as="span" pl={2} fontSize="sm">
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FcOk} color="green.500" />
              Utilizes CarrierWave gem to allow direct upload of user photos to
              backend.
            </ListItem>
            <ListItem>
              <ListIcon as={FcOk} color="green.500" />
              Allows Custom CSS on user profiles after sanitization.
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
