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
  props.setCurrentLocation('Market Mountain');
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
        <Badge colorScheme="red">IN PROGRESS</Badge>
        <br />
        <Badge colorScheme="red">Demo</Badge>
        <Text as="span" pl={2} fontSize="sm" color="teal.500">
          <Link href="https://marketmountain.cristiandeleon.dev">View</Link>
        </Text>
        <br />
        <Badge colorScheme="green">Objective</Badge>
        <Text as="span" pl={2} fontSize="sm">
          Work with real time cryptocurrency data to track pricing and convert
          coins.
        </Text>
        <br />
        <Badge colorScheme="green">Stack</Badge>
        <Text as="span" pl={2} fontSize="sm">
          Typescript, React
        </Text>
        <br />
        <Badge colorScheme="green">Github</Badge>
        <Text as="span" pl={2} fontSize="sm" color="teal.500">
          <Link href="https://github.com/Libaration/MarketMountain">
            Source
          </Link>
        </Text>
        <br />
        <Badge colorScheme="green">Details</Badge>
        <Text as="span" pl={2} fontSize="sm">
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FcOk} color="green.500" />
              Utilizes WebSockets to handle real time pricing from CryptoCompare
              API.
            </ListItem>
            <ListItem>
              <ListIcon as={FcOk} color="green.500" />
              Uses ReCharts package to visualize cryptocurrency data.
            </ListItem>
          </List>
        </Text>
      </Box>
    </Flex>
  );
}
