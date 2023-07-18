import React, { useEffect } from 'react';
import {
  Flex,
  Text,
  Box,
  List,
  ListItem,
  ListIcon,
  Link,
} from '@chakra-ui/react';
import { Badge } from '@chakra-ui/react';
import { FcOk } from 'react-icons/fc';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';

export default function Lofihours(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  props.setCurrentLocation('Lofi Hours');
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
                  src="https://user-images.githubusercontent.com/11550216/141719706-2d9874ae-2434-4f52-befa-757735481e71.mp4"
                  type="video/mp4"
                  preload="auto"
                />
                Your browser does not support the video tag.
              </video>
            </SRLWrapper>
          </Flex>
        </Box>
        <Box pl={5} pr={5}>
          <Badge colorScheme="green">Demo</Badge>
          <Text as="span" pl={2} fontSize="sm" color="teal.500">
            <Link href="http://lo-fi-hours.vercel.app/">View</Link>
          </Text>
          <br />

          <Badge colorScheme="green">Objective</Badge>
          <Text as="span" pl={2} fontSize="sm">
            A project to learn about audio manipulation in javascript. A
            NextJS/React/TailwindCSS app that slows/reverbs any song using
            Spotify and OAuth to access API and create a lofi aesthetic.
          </Text>
          <br />
          <Badge colorScheme="green">Stack</Badge>
          <Text as="span" pl={2} fontSize="sm">
            Nextjs,React
          </Text>
          <br />
          <Badge colorScheme="green">Github</Badge>
          <Text as="span" pl={2} fontSize="sm" color="teal.500">
            <Link href="https://github.com/Libaration/LoFiHours">Source</Link>
          </Text>
          <br />
          <Badge colorScheme="green">Details</Badge>
          <Text as="span" pl={2} fontSize="sm">
            <List spacing={3}>
              <ListItem>
                <ListIcon as={FcOk} color="green.500" />
                Utilizes tone js for adjusting audio stream speed and pitch.
              </ListItem>
            </List>
          </Text>
        </Box>
      </Flex>
    </SimpleReactLightbox>
  );
}
