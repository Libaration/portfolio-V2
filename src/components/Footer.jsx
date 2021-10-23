import React from 'react';
import logo from '../logo.svg';
import { Image, Box, Flex, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Flex justifyContent="right">
      <Box>
        <Text>Made with ❤️ using Chakra UI</Text>
      </Box>
      <Box ml={3}>
        <Image h={5} src={logo} />
      </Box>
    </Flex>
  );
}
