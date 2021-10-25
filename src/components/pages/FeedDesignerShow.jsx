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
import fd1 from '../../assets/portfolio/fd1.jpg';
import fd2 from '../../assets/portfolio/fd2.jpg';
export default function FeedDesignerShow(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  props.setCurrentLocation('Feed Designer');
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
              <Image
                m={1}
                d="inline"
                objectFit="cover"
                maxWidth={250}
                borderRadius="base"
                src={fd1}
              />
              <Image
                m={1}
                d="inline"
                objectFit="cover"
                maxWidth={250}
                borderRadius="base"
                src={fd2}
              />

              <video width="515" height="245" controls>
                <source
                  src="https://user-images.githubusercontent.com/11550216/120419398-5eb99800-c330-11eb-8967-f0e261138b4d.mp4"
                  type="video/mp4"
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
          <Badge colorScheme="green">Objective</Badge>
          <Text as="span" pl={2} fontSize="sm">
            Create a web app that allows users/influencers to pre-plan their
            instagram feed for a more cohesive page design/theme.
          </Text>
          <br />
          <Badge colorScheme="green">Stack</Badge>
          <Text as="span" pl={2} fontSize="sm">
            Vanilla Javascript, Ruby, Rails
          </Text>
          <br />
          <Badge colorScheme="green">Github</Badge>
          <Text as="span" pl={2} fontSize="sm" color="teal.500">
            <Link href="https://github.com/Libaration/feed-designer">
              Source
            </Link>
          </Text>
          <br />
          <Badge colorScheme="green">Details</Badge>
          <Text as="span" pl={2} fontSize="sm">
            <List spacing={3}>
              <ListItem>
                <ListIcon as={FcOk} color="green.500" />
                Scrapes user photos using Nokogiri gem and saves them to Rails
                Backend API.
              </ListItem>
              <ListItem>
                <ListIcon as={FcOk} color="green.500" />
                Implements 3rd party packages to allow drag and drop
                functionally when designing/reordering photos.
              </ListItem>
              <ListItem>
                <ListIcon as={FcOk} color="green.500" />
                Fetches User information from Rails API to display in DOM.
              </ListItem>
            </List>
          </Text>
        </Box>
      </Flex>
    </SimpleReactLightbox>
  );
}
