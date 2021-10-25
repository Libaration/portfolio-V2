import React, { useState, useRef } from 'react';
import {
  Box,
  Flex,
  Text,
  Heading,
  useColorModeValue,
  Avatar,
  Button,
  chakra,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { BiRightArrow } from 'react-icons/bi';
import profilepicture from '../assets/profilepicture.jpeg';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player/soundcloud';

export default function About() {
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState({ display: 'none' });
  const playerRef = useRef(null);
  const MotionBox = motion(Box);
  const lightDarkBoxBackground = useColorModeValue('#4A556890', '#4A556840');
  const lightDarkText = useColorModeValue(
    'linear(to-l, #ffffff, #ffffff)',
    'linear(to-l, #F6AD55, #81E6D9)'
  );
  return (
    <>
      <Flex justifyContent="center" flexDirection="column" alignItems="center">
        <Box maxWidth={700}>
          <Flex
            mt={-1}
            zIndex={2}
            position="relative"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            textAlign="center"
          >
            <Box
              backgroundColor={lightDarkBoxBackground}
              borderRadius={15}
              w={['20rem', '20rem', '3xl']}
            >
              <Heading color="white" p={2}>
                <Text bgGradient={lightDarkText} bgClip="text">
                  Hi there 👋 <br />
                  I'm a Full Stack Developer based in Virginia
                </Text>
              </Heading>
            </Box>
          </Flex>
          <Flex justifyContent="space-between" mt={10} p={3}>
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Box>
                <Heading fontSize={['xl', 'xl', '5xl', '5xl']}>
                  Cristian Deleon
                </Heading>
                <Text fontSize={['sm', 'md', 'lg']}>
                  Designer/Developer/Creator
                </Text>
              </Box>
            </MotionBox>
            <Box>
              <Avatar size={'xl'} name="Cristian Deleon" src={profilepicture} />
            </Box>
          </Flex>
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            exit={{ opacity: 0 }}
          >
            {' '}
            <Flex flexDirection="column" mr={3} ml={3} maxWidth="800px">
              <Heading
                size="md"
                textDecoration="underline"
                mt={3}
                textDecorationStyle="dotted"
                sx={{ textUnderlineOffset: '0.1em' }}
              >
                About
              </Heading>
              <Text fontSize="sm" mb={5}>
                Cristian is full-stack / freelance developer based in
                Charlottesville with a passion for programming and building
                applications to make his life easier. He has always had a knack
                for all things creative and technology in general. He loves
                solving real-life problems through code. When not programming he
                loves photography,cinematography and producing music.
              </Text>
            </Flex>
            <Flex maxWidth="800px" justify="center" alignItems="center">
              <Link to="/portfolio">
                <Button
                  textsize="md"
                  colorScheme="teal"
                  rightIcon={<BiRightArrow />}
                >
                  My Portfolio
                </Button>
              </Link>
            </Flex>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            exit={{ opacity: 0 }}
          >
            <Flex flexDirection="column" mr={3} ml={3} maxWidth="800px">
              <Heading
                size="md"
                textDecoration="underline"
                mt={3}
                textDecorationStyle="dotted"
                sx={{ textUnderlineOffset: '0.1em' }}
              >
                I 💙
              </Heading>
              <Text fontSize="sm" mb={10}>
                <chakra.a
                  href="https://instagram.com/hatecristian"
                  color="teal.200"
                >
                  Photography,
                </chakra.a>
                <chakra.a
                  color="teal.200"
                  href="https://na.op.gg/summoner/userName=hatecristian"
                >
                  Playing video games,
                </chakra.a>
                Skateboarding,
                <chakra.a
                  color="teal.200"
                  onClick={() => {
                    setPlaying(true);
                    setVisible({ display: 'block' });
                  }}
                  sx={{ cursor: 'pointer' }}
                >
                  Making music,
                </chakra.a>
                and Designing UI's
              </Text>
              <MotionBox
                animate={{ x: 0 }}
                initial={{ x: -1000 }}
                transition={{ ease: 'easeOut', duration: 2 }}
              >
                <Box mb={5}>
                  <ReactPlayer
                    url="https://soundcloud.com/hatecristian/bol4-some-hatecristian-remix"
                    playing={playing}
                    ref={playerRef}
                    style={visible}
                    width={350}
                    height={100}
                  />
                </Box>
              </MotionBox>
            </Flex>
          </MotionBox>
        </Box>
      </Flex>
    </>
  );
}
