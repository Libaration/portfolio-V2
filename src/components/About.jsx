import React from 'react';
import {
  Box,
  Flex,
  Text,
  Heading,
  useColorModeValue,
  Avatar,
} from '@chakra-ui/react';
import profilepicture from '../assets/profilepicture.jpeg';
export default function About() {
  const lightDarkBoxBackground = useColorModeValue('#4A556890', '#4A556840');
  const lightDarkText = useColorModeValue(
    'linear(to-l, #ffffff, #ffffff)',
    'linear(to-l, #F6AD55, #81E6D9)'
  );
  return (
    <>
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
          <Text fontSize={['sm', 'md', 'lg']}>Designer/Developer/Creator</Text>
        </Box>
        <Box>
          <Avatar size={'xl'} name="Cristian Deleon" src={profilepicture} />
        </Box>
      </Flex>
      <Flex flexDirection="column" mr={3} ml={3} maxWidth="800px">
        <Heading size="md" textDecoration="underline" mt={3}>
          About
        </Heading>
        <Text fontSize="sm" mb={10}>
          Cristian is full-stack / freelance developer based in Charlottesville
          with a passion for programming and building applications to make his
          life easier. He has always had a knack for all things creative and
          technology in general. He loves solving real-life problems through
          code. When not programming he loves photography,cinematography and
          producing music.
        </Text>
      </Flex>
    </>
  );
}
