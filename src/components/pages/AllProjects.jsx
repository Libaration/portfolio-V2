import React from 'react';
import ea1 from '../../assets/portfolio/ea1.jpeg';
import fd1 from '../../assets/portfolio/fd1.jpg';
import marketmountain from '../../assets/portfolio/marketmountain.png';
import Project from '../Project';
import Habbo from '../Habbo';
import { Link } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import ashland from '../../assets/portfolio/ashland.png';
import lofihours from '../../assets/portfolio/lofihours.png';
export default function AllProjects(props) {
  props.setCurrentLocation('');
  return (
    <>
      <Link to="/portfolio/habbo/">
        <Habbo />
      </Link>
      <Project
        src={ashland}
        title="Ashland Assistant"
        description="Freelance Project for Ashland Auction. Electron / React app that serves API data on auctions in a styled email ready format for mass email marketing."
      />
      <Project
        src={ea1}
        title="Estate Auction"
        description="A Modern real estate auction app with support for bidding/payments through Stripe."
      />
      <Project
        src={fd1}
        title="Feed Designer"
        description="An instagram pre-planning web app for designing instagram feeds."
      />
      <Project
        src="https://camo.githubusercontent.com/606595f249a8648b930b382ce5a418e3eee7d2c2ff34c53df2e8ccb4f5f3e0fa/68747470733a2f2f692e6779617a6f2e636f6d2f36333361633431396239613736383062343836666433303165666335383930322e6a7067"
        title="CRUDSpace"
        description="An example of basic CRUD design, 2005 Myspace recoded with Ruby/Sinatra"
      />
      <Project
        src={lofihours}
        title="Lofi Hours"
        description="An example of audio manipulation using JS. Uses Spotify and OAuth to access API and create a lofi aesthetic."
      />
      <Project
        src="https://user-images.githubusercontent.com/11550216/110198457-9f347300-7e20-11eb-971c-adaea6d2e3c6.gif"
        title="Flavor of the Week"
        description="A social music sharing app for music discovery"
      />
    </>
  );
}
