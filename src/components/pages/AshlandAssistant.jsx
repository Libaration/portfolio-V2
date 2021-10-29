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
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';

export default function AshlandAssistant(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  props.setCurrentLocation('Ashland Assistant');
  return (
    <SimpleReactLightbox>
      <Flex w="100%" flexDirection="column" flexWrap="wrap">
        <Box p={5}>
          <Flex
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <SRLWrapper>
              <video width="515" height="245" controls>
                <source
                  src="https://user-images.githubusercontent.com/11550216/139358854-f0e98c48-4047-46ca-a997-480f1bcd90c5.mp4"
                  type="video/mp4"
                  preload="auto"
                />
                Your browser does not support the video tag.
              </video>
            </SRLWrapper>
          </Flex>
        </Box>
        <Box pl={5} pr={5}>
          {/* <Badge colorScheme="green">Demo</Badge>
          <Text as="span" pl={2} fontSize="sm" color="teal.500">
            View
          </Text> */}
          <br />
          <Badge colorScheme="green">v0.0.1</Badge>
          <br />
          <Badge colorScheme="green">Objective</Badge>
          <Text as="span" pl={2} fontSize="sm">
            Freelance Project that serves{' '}
            <Link href="http://ashlandauction.com">Ashland Auctions </Link>
            backend API to create an HTML Markup for mass email / email blasts.
          </Text>
          <br />
          <Badge colorScheme="green">Stack</Badge>
          <Text as="span" pl={2} fontSize="sm">
            React,Electron
          </Text>
          <br />
          <Badge colorScheme="green">Github</Badge>
          <Text as="span" pl={2} fontSize="sm" color="teal.500">
            <Link href="https://github.com/Libaration/email-assistant">
              Source
            </Link>
          </Text>
          <br />
          <Badge colorScheme="green">Details</Badge>
          <Text as="span" pl={2} fontSize="sm">
            <List spacing={3}>
              <ListItem>
                <ListIcon as={FcOk} color="green.500" />
                Utilizes Sockets(icpMain/icpRenderer) to securely and
                asynchronously handle messages from the renderer to invoke
                interprocess communication on host operating systems.
              </ListItem>
            </List>
          </Text>
        </Box>
      </Flex>
    </SimpleReactLightbox>
  );
}
