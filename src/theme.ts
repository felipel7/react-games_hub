import {
  ThemeConfig,
  extendTheme,
  ThemeComponentProps,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'dark',
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: ThemeComponentProps) => ({
      body: {
        bg: mode('#ffffff', '#21262D')(props),
      },
    }),
  },
  colors: {
    light: {
      btnActive: '#ffffff',
      btnGroupBg: '#F5F6F8',
      textActive: '#0A1B39',
      textInactive: '#83899F',
      borderColor: '#E6E7EC',
    },
    dark: {
      btnActive: '#3B4350',
      btnGroupBg: '#292E37',
      textActive: '#ffffff',
      textInactive: '#83899F',
      borderColor: '#313843',
    },
  },
  components: {
    Button: {
      variants: {
        outlineBorder: (props: ThemeComponentProps) => ({
          bg: mode('light.btnGroupBg', 'dark.btnGroupBg')(props),
          border: '1px solid',
          borderColor: mode('light.borderColor', 'dark.borderColor')(props),
        }),
      },
    },
  },
});

export default theme;
