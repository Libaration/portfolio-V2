import React from 'react';
import { Text, Flex, Image, Link } from '@chakra-ui/react';

export default function Post(props) {
  return (
    <Flex
      textAlign="center"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      m={5}
    >
      <Link href={props.link}>
        <Text fontWeight="bold" fontSize="lg">
          {props.title}
        </Text>
        <Image src={props.thumbnail} width="lg" />
        <Text fontSize="sm"></Text>
      </Link>
    </Flex>
  );
}
