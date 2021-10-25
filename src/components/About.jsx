import React from 'react';
import {
  Box,
  Flex,
  Text,
  Heading,
  useColorModeValue,
  Avatar,
  Button,
  chakra,
} from '@chakra-ui/react';
import { BiRightArrow } from 'react-icons/bi';
import profilepicture from '../assets/profilepicture.jpeg';
import { Link } from 'react-router-dom';

export default function About() {
  const lightDarkBoxBackground = useColorModeValue('#4A556890', '#4A556840');
  const lightDarkText = useColorModeValue(
    'linear(to-l, #ffffff, #ffffff)',
    'linear(to-l, #F6AD55, #81E6D9)'
  );
  return (
    <>
      <Flex justifyContent="center" flexDirection="column" alignItems="center">
        <Box maxWidth={700}>
          <Flex
            mt={-1}
            zIndex={2}
            position="relative"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            textAlign="center"
          >
            <Box
              backgroundColor={lightDarkBoxBackground}
              borderRadius={15}
              w={['20rem', '20rem', '3xl']}
            >
              <Heading color="white" p={2}>
                <Text bgGradient={lightDarkText} bgClip="text">
                  Hi there 👋 <br />
                  I'm a Full Stack Developer based in Virginia
                </Text>
              </Heading>
            </Box>
          </Flex>
          <Flex justifyContent="space-between" mt={10} p={3}>
            <Box>
              <Heading fontSize={['xl', 'xl', '5xl', '5xl']}>
                Cristian Deleon
              </Heading>
              <Text fontSize={['sm', 'md', 'lg']}>
                Designer/Developer/Creator
              </Text>
            </Box>
            <Box>
              <Avatar size={'xl'} name="Cristian Deleon" src={profilepicture} />
            </Box>
          </Flex>
          <Flex flexDirection="column" mr={3} ml={3} maxWidth="800px">
            <Heading
              size="md"
              textDecoration="underline"
              mt={3}
              textDecorationStyle="dotted"
              sx={{ textUnderlineOffset: '0.1em' }}
            >
              About
            </Heading>
            <Text fontSize="sm" mb={5}>
              Cristian is full-stack / freelance developer based in
              Charlottesville with a passion for programming and building
              applications to make his life easier. He has always had a knack
              for all things creative and technology in general. He loves
              solving real-life problems through code. When not programming he
              loves photography,cinematography and producing music.
            </Text>
          </Flex>
          <Flex maxWidth="800px" justify="center" alignItems="center">
            <Link to="/portfolio">
              <Button
                textsize="md"
                colorScheme="teal"
                rightIcon={<BiRightArrow />}
              >
                My Portfolio
              </Button>
            </Link>
          </Flex>
          <Flex flexDirection="column" mr={3} ml={3} maxWidth="800px">
            <Heading
              size="md"
              textDecoration="underline"
              mt={3}
              textDecorationStyle="dotted"
              sx={{ textUnderlineOffset: '0.1em' }}
            >
              I 💙
            </Heading>
            <Text fontSize="sm" mb={10}>
              <chakra.a
                href="https://instagram.com/hatecristian"
                color="teal.200"
              >
                Photography,
              </chakra.a>
              <chakra.a
                color="teal.200"
                href="https://na.op.gg/summoner/userName=hatecristian"
              >
                Playing video games,
              </chakra.a>
              Skateboarding,
              <chakra.a
                color="teal.200"
                href="https://soundcloud.com/hatecristian"
              >
                Making music,
              </chakra.a>
              and Designing UI's
            </Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
