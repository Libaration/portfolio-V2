import React from 'react';
import { Box, Flex, Text, Heading, useColorModeValue } from '@chakra-ui/react';
export default function About() {
  const lightDarkBoxBackground = useColorModeValue('#4A556890', '#4A556840');
  const lightDarkText = useColorModeValue(
    'linear(to-l, #ffffff, #ffffff)',
    'linear(to-l, #F6AD55, #81E6D9)'
  );
  return (
    <Flex
      mt={-1}
      zIndex={2}
      position="relative"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      textAlign="center"
    >
      <Box backgroundColor={lightDarkBoxBackground} borderRadius={15} w="3xl">
        <Heading color="white" p={2}>
          <Text bgGradient={lightDarkText} bgClip="text">
            Hi there 👋 <br />
            I'm Cristian Deleon, a Web Developer, Designer & Creator
          </Text>
        </Heading>
      </Box>

      <Text>
        <br />I started coding in middle school using Visual Basic 6. I was
        mostly creating hex/memory editors and packet loggers for online games
        in C# and VB6. I've made the switch to Web Development and couldn't be
        happier. I love Front End design and working closely with customer
        facing UI. I graduated from Flatiron bootcamp where I really got to put
        everything together and dive into the full stack! I've worked
        extensively with Rails on backends for it's simplicity and opinionated
        code, and React/Redux for it's reusability on the frontend, I'm a
        passionate coder and pride myself in learning new concepts quickly!
      </Text>
    </Flex>
  );
}
