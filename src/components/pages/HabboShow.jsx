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
export default function HabboShow(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  props.setCurrentLocation('HabboHTML5');
  return (
    <Flex w="100%" flexDirection="column" flexWrap="wrap">
      <Box p={5}>
        <Flex
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        ></Flex>
      </Box>
      <Box pl={5} pr={5}>
        <Badge colorScheme="green">Demo</Badge>
        <Text as="span" pl={2} fontSize="sm" color="teal.500">
          <Link href="https://habbo-html-5-zvos9.ondigitalocean.app/">
            View
          </Link>
        </Text>
        <br />
        <Badge colorScheme="green">Objective</Badge>
        <Text as="span" pl={2} fontSize="sm">
          Recreate childhood game originally coded in Shockwave/Flash to HTML5
          and Vanilla JS
        </Text>
        <br />
        <Badge colorScheme="green">Stack</Badge>
        <Text as="span" pl={2} fontSize="sm">
          Javascript, Phaser, Tiled
        </Text>
        <br />
        <Badge colorScheme="green">Github</Badge>
        <Text as="span" pl={2} fontSize="sm" color="teal.500">
          <Link href="https://github.com/Libaration/HabboHTML5">Source</Link>
        </Text>
        <br />
        <Badge colorScheme="green">Details</Badge>
        <Text as="span" pl={2} fontSize="sm">
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FcOk} color="green.500" />
              Uses Phaser3 library for rendering canvas / game sprites.
            </ListItem>
            <ListItem>
              <ListIcon as={FcOk} color="green.500" />
              Utilizes Tiled to create Tilemaps and textures.
            </ListItem>
            <ListItem>
              <ListIcon as={FcOk} color="green.500" />
              Implements intelligent pathfinding for sprites through Easystar.
            </ListItem>
          </List>
        </Text>
      </Box>
    </Flex>
  );
}
