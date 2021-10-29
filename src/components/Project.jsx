import React from 'react';
import { Image, Text, Flex } from '@chakra-ui/react';
import { Link, useRouteMatch } from 'react-router-dom';
export default function Project(props) {
  let match = useRouteMatch();
  return (
    <>
      <Link to={`${match.url}/${props.title.replace(/\s+/g, '')}`}>
        <Flex
          maxWidth={350}
          textAlign="center"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          m={3}
          mt={16}
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
      </Link>
    </>
  );
}
