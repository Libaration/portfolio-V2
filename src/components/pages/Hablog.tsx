import React, { useEffect } from 'react';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import {
  Flex,
  Text,
  Box,
  List,
  ListItem,
  ListIcon,
  Link,
  Badge,
} from '@chakra-ui/react';
import { FcOk } from 'react-icons/fc';
import hablogintegration from '../../assets/portfolio/hablogintegration.mov';
type Props = {
  setCurrentLocation: (currentLocation: string) => void;
};

const Hablog = (props: Props) => {
  const { setCurrentLocation } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentLocation('Hablog');
  }, [setCurrentLocation]);
  return (
    <SimpleReactLightbox>
      <Flex w="100%" flexDirection="column" flexWrap="wrap">
        <Box p={5}>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            width={'100%'}
          >
            <Flex flexDirection="row" alignItems={'center'}>
              <Text fontSize="2xl" fontWeight="bold" mr={5} width={300}>
                Packet Integration with third party services.
              </Text>

              <SRLWrapper>
                <video width="515" height="245" controls>
                  <source src={hablogintegration} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </SRLWrapper>
            </Flex>
            <Flex flexDirection="row" alignItems={'center'} mt={10}>
              <Text fontSize="2xl" fontWeight="bold" mr={5} width={300}>
                Early Proof of Concept using Hex values of packets.
              </Text>

              <SRLWrapper>
                <video width="515" height="245" controls>
                  <source
                    src={
                      'https://user-images.githubusercontent.com/11550216/250799733-e01ad50f-07e5-4dbf-842e-d4c14cbec4cc.mov'
                    }
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </SRLWrapper>
            </Flex>
          </Flex>
        </Box>
        <Box pl={5} pr={5}>
          <Badge colorScheme="green">Objective</Badge>
          <Text as="span" pl={2} fontSize="sm">
            Learn Rust by creating an application for handling and processing
            network packets, implementing a proxy to intercept and log game
            packets for analysis and debugging.
            <br />
            Learn more about low level networking and reverse engineering
            through packet analysis and disassembly, gaining insights into
            debugging and analyzing network communication in real-world
            applications.
          </Text>
          <br />
          <Badge colorScheme="green">Stack</Badge>
          <Text as="span" pl={2} fontSize="sm">
            Rust
          </Text>
          <br />
          <Badge colorScheme="green">Github</Badge>
          <Text as="span" pl={2} fontSize="sm" color="teal.500">
            <Link href="https://github.com/Libaration/Hablog">Source</Link>
          </Text>
          <br />
          <Badge colorScheme="green">Details</Badge>
          <Text as="span" pl={2} fontSize="sm">
            <List spacing={3}>
              <ListItem>
                <ListIcon as={FcOk} color="green.500" />
                Uses Tokio for asynchronous I/O operations and Mutex for
                thread-safe access to shared data.
              </ListItem>
              <ListItem>
                <ListIcon as={FcOk} color="green.500" />
                Processes incoming and outgoing packets, working with byte
                arrays to extract relevant packet information.
              </ListItem>
              <ListItem>
                <ListIcon as={FcOk} color="green.500" />
                Utilizes "byteorder" crate for proper reading and destructuring
                of buffer byte arrays.
              </ListItem>
              <ListItem>
                <ListIcon as={FcOk} color="green.500" />
                Manipulates binary data and implements a network proxy to
                intercept and process data.
              </ListItem>
            </List>
          </Text>
        </Box>
      </Flex>
    </SimpleReactLightbox>
  );
};

export default Hablog;
