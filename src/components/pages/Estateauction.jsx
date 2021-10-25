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
export default function Estateauction(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  props.setCurrentLocation('Estate Auction');
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
                src="https://camo.githubusercontent.com/309344e0f43d8d2b23a8d212588fb960722277bde9dbee17ef9d7967becfaab8/68747470733a2f2f692e6779617a6f2e636f6d2f38386135373064333033383536613939643939373663363234393334393361352e6a7067"
              />
              <Image
                m={1}
                d="inline"
                objectFit="cover"
                maxWidth={250}
                borderRadius="base"
                src="https://camo.githubusercontent.com/9db0a48d66cc4e6274d9c90636da5a5ac5e6dd5958fc4a7332ddc0b42c6af2c5/68747470733a2f2f692e6779617a6f2e636f6d2f36643037353231343931633762346532666565363930653332336163326465322e706e67"
              />
              <Image
                m={1}
                d="inline"
                objectFit="cover"
                maxWidth={250}
                borderRadius="base"
                src="https://camo.githubusercontent.com/e8acc8e90cfc67e054d29ab10c86d7a2787be5b8d5bc2fb9cd1b79ef6079c464/68747470733a2f2f692e6779617a6f2e636f6d2f33343166313831663036333962396432373031393637303436313762306535642e706e67"
              />
              <Image
                m={1}
                d="inline"
                objectFit="cover"
                maxWidth={250}
                borderRadius="base"
                src="https://camo.githubusercontent.com/377921014a552103d517e8c64a01546c39aef7549347cac28042b667fef13a79/68747470733a2f2f692e6779617a6f2e636f6d2f39313731326236613931306435653931616565653963386433656430313038302e706e67"
              />
              <Image
                m={1}
                d="inline"
                objectFit="cover"
                maxWidth={250}
                borderRadius="base"
                src="https://camo.githubusercontent.com/35137edf63ab7a45b808d5fb87bb469d27bd3f244377a255829fdc37346544f6/68747470733a2f2f692e6779617a6f2e636f6d2f39393063333162616639353733396432316631643735326462303433613033342e706e67"
              />
              <Image
                m={1}
                d="inline"
                objectFit="cover"
                maxWidth={250}
                borderRadius="base"
                src="https://camo.githubusercontent.com/a28559d5b8f35b252c5246a71f83985d7eed485229b2228ec404b2500319c8d4/68747470733a2f2f692e6779617a6f2e636f6d2f63623635353563383838383138383632323338333264633631653363376266662e6a7067"
              />
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
            Create a modern Real Estate auction website for consumers to list
            and sell their homes
          </Text>
          <br />
          <Badge colorScheme="green">Stack</Badge>
          <Text as="span" pl={2} fontSize="sm">
            Typescript, React, Ruby, Rails
          </Text>
          <br />
          <Badge colorScheme="green">Github</Badge>
          <Text as="span" pl={2} fontSize="sm" color="teal.500">
            <Link href="https://github.com/Libaration/Estate-Auction">
              Source
            </Link>
          </Text>
          <br />
          <Badge colorScheme="green">Details</Badge>
          <Text as="span" pl={2} fontSize="sm">
            <List spacing={3}>
              <ListItem>
                <ListIcon as={FcOk} color="green.500" />
                Utilizes 3rd party API's from Google Maps and Stripe to show
                home locations and place
              </ListItem>
              <ListItem>
                <ListIcon as={FcOk} color="green.500" />
                Uses JSON Web Tokens and localStorage to store encrypted user
                information client side.
              </ListItem>
              <ListItem>
                <ListIcon as={FcOk} color="green.500" />
                Leverages Redux and Thunk middleware to asynchronously retrieve
                data from the Rails backend API that powers listings/auctions
              </ListItem>
            </List>
          </Text>
        </Box>
      </Flex>
    </SimpleReactLightbox>
  );
}
