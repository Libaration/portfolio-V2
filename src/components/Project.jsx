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
          height={300}
          ml={5}
        >
          {props.video ? (
            <Flex
              backgroundColor={'gray.100'}
              height={'200'}
              mt={5}
              alignItems={'center'}
              borderRadius={'base'}
            >
              <video controls autoPlay muted height={'200'}>
                <source src={props.src} type="video/mp4" preload="auto" />
                Your browser does not support the video tag.
              </video>
            </Flex>
          ) : (
            <Image
              src={props.src}
              borderRadius="base"
              height="200px"
              objectFit="cover"
              mt={5}
            />
          )}

          <Text fontSize="xl" mt={3}>
            {props.title}
          </Text>

          <Text mb={3} fontSize={'xs'}>
            {props.description}
          </Text>
        </Flex>
      </Link>
    </>
  );
}
