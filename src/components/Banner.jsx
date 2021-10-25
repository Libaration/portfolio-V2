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
  Link,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../assets/logo.png';
import logolight from '../assets/logolight.png';
export default function Banner() {
  const logoToggle = useColorModeValue(logolight, logo);
  return (
    <header>
      <Flex align-items="center" zIndex="9999" position="relative">
        <Box>
          <Image src={logoToggle} h="auto" w={[300, 400, 500]} mt={1} />
        </Box>
        <Flex w="100%" justifyContent="right">
          <Box>
            <ColorModeSwitcher />
          </Box>
          <Box>
            <Menu zIndex="9999">
              <MenuButton
                as={IconButton}
                aria-label="Options"
                variant="outline"
                icon={<GiHamburgerMenu />}
              ></MenuButton>
              <MenuList>
                <Link href="/">
                  <MenuItem>About</MenuItem>
                </Link>
                <Link href="/portfolio">
                  <MenuItem>Projects</MenuItem>
                </Link>
                <Link href="/blog">
                  <MenuItem>Blog</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Flex>
    </header>
  );
}
