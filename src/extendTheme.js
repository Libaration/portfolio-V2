import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};
const styles = {
  global: props => ({
    body: {
      bg: mode('#686a90', '#1A202C')(props),
    },
  }),
};
const theme = extendTheme({ config });
export default theme;
