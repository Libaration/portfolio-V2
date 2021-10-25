import React from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react';
import ea1 from '../assets/portfolio/ea1.jpeg';
import fd1 from '../assets/portfolio/fd1.jpg';
import Project from './Project';
import Habbo from './Habbo';
export default function Portfolio() {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Flex
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        maxWidth={800}
      >
        <Box w="100%">
          <Heading
            textAlign="left"
            textDecoration="underline"
            textDecorationStyle="dotted"
            sx={{ textUnderlineOffset: '0.1em' }}
            p={3}
          >
            Works
          </Heading>
        </Box>

        <Habbo />
        <Project
          src={ea1}
          title="Estate Auction"
          description="A Modern real estate auction app with support for bidding/payments through Stripe."
        />
        <Project
          src={fd1}
          title="Feed-Designer"
          description="An instagram pre-planning web app for designing instagram feeds."
        />
        <Project
          src="https://camo.githubusercontent.com/606595f249a8648b930b382ce5a418e3eee7d2c2ff34c53df2e8ccb4f5f3e0fa/68747470733a2f2f692e6779617a6f2e636f6d2f36333361633431396239613736383062343836666433303165666335383930322e6a7067"
          title="CRUDSpace"
          description="An example of basic CRUD design, 2005 Myspace recoded with Ruby/Sinatra"
        />
        <Project
          src="https://user-images.githubusercontent.com/11550216/110198457-9f347300-7e20-11eb-971c-adaea6d2e3c6.gif"
          title="Flavor of the Week"
          description="A social music sharing app for music discovery"
        />
      </Flex>
    </Flex>
  );
}
