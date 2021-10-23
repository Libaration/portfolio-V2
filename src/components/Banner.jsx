import React, { useRef } from 'react';
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Image,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../assets/logo.png';
import logolight from '../assets/logolight.png';
export default function Banner() {
  const logoToggle = useColorModeValue(logolight, logo);
  return (
    <header>
      <Flex align-items="center" justifyContent="space-between" ml={2} mr={2}>
        <Box>
          <Image src={logoToggle} h="auto" w={[300, 400, 500]} mt={1} />
        </Box>
        <Box mt={2}>
          <ColorModeSwitcher />
        </Box>
        <Box mt={2}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              variant="outline"
              icon={<GiHamburgerMenu />}
            ></MenuButton>
            <MenuList>
              <MenuItem>Home</MenuItem>
              <MenuItem>Projects</MenuItem>
              <MenuItem>About</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </header>
  );
}
