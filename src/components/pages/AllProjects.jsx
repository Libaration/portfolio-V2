import React from 'react';
import ea1 from '../../assets/portfolio/ea1.jpeg';
import fd1 from '../../assets/portfolio/fd1.jpg';
import crudspace from '../../assets/portfolio/crudspace.jpeg';
import Project from '../Project';
import Habbo from '../Habbo';
import { Link } from 'react-router-dom';
import ashland from '../../assets/portfolio/ashland.png';
import lofihours from '../../assets/portfolio/lofihours.png';
import hablogintegration from '../../assets/portfolio/hablogintegration.mov';
export default function AllProjects(props) {
  props.setCurrentLocation('');
  return (
    <>
      <Project
        src={hablogintegration}
        video={true}
        title="Hablog"
        description="A Rust application for handling and processing network packets, implementing a proxy to intercept and log game packets for analysis and debugging."
      />
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
        src={crudspace}
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
