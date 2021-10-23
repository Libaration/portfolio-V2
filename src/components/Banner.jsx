import React from 'react';
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Image,
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
      <Flex align-items="center" zIndex={2} position="relative">
        <Box>
          <Image src={logoToggle} h="auto" w={[300, 400, 500]} mt={1} />
        </Box>
        <Flex w="100%" justifyContent="right">
          <Box>
            <ColorModeSwitcher />
          </Box>
          <Box>
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
      </Flex>
    </header>
  );
}
