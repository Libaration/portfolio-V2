import React from 'react';
import {
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Flex,
  theme,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import hamburger from '../assets/hamburger.png';
import { GiHamburgerMenu } from 'react-icons/gi';
export default function Banner() {
  return (
    <header>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          variant="outline"
          icon={<GiHamburgerMenu />}
        ></MenuButton>
        <MenuList>
          <MenuItem>New Window</MenuItem>
          <MenuItem>Open Closed Tab</MenuItem>
          <MenuItem>Open File</MenuItem>
        </MenuList>
      </Menu>
      <Flex align-items="center" justifyContent="space-between">
        <Box></Box>
        <Box></Box>
      </Flex>
    </header>
  );
}
