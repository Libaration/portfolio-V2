import React from 'react';
import { Box, Heading, Image, Text, Flex } from '@chakra-ui/react';
export default function Project(props) {
  return (
    <Flex
      maxWidth={350}
      textAlign="center"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      m={5}
    >
      <Image
        src={props.src}
        borderRadius="base"
        height="200px"
        objectFit="cover"
      />
      <Text fontSize="xl" mt={3}>
        {props.title}
      </Text>

      <Text>{props.description}</Text>
    </Flex>
  );
}
