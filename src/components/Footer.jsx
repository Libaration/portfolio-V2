import React from 'react';
import logo from '../logo.svg';
import { Image, Box, Flex, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Flex justifyContent="right" mt={5}>
      <Box>
        <Text fontSize="xs">
          Made using Chakra UI, ThreeJS and React
        </Text>
      </Box>
      <Box ml={2} mr={2}>
        <Image h={4} src={logo} />
      </Box>
    </Flex>
  );
}
