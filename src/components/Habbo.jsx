import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
export default function Habbo() {
  return (
    <Flex
      maxWidth={345}
      textAlign="center"
      flexDirection="column"
      justifyContent="center"
      m={5}
    >
      <Box
        position="relative"
        w={345}
        h={200}
        borderRadius="base"
        overflow="hidden"
      >
        <Box transform="translate(-45px,-120px)">
          <iframe
            title="HabboHTML5"
            src="https://habbo-html-5-zvos9.ondigitalocean.app/"
            width={400}
            height={400}
            sx={{ top: '100px' }}
          />
        </Box>
      </Box>

      <Text fontSize="xl" mt={3}>
        HabboHTML5
      </Text>

      <Text>A recreation of an Adobe Shockwave game in Phaser3/Vanilla JS</Text>
    </Flex>
  );
}
