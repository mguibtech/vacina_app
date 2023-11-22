import {DefaltTheme} from 'styled-components';
import {Colors} from './colors';
import {typographyCommon} from './common';

export const themeLight: DefaltTheme = {
  colors: {
    primary: {
      main: Colors.brand04,
      onMain: Colors.white,
    },
    secondary: {
      main: Colors.brand01,
      onMain: Colors.white,
    },
    error: {
      main: Colors.red,
      onMain: Colors.white,
    },
    background: {
      main: Colors.white,
      onMain: Colors.black,
    },
    surface: {
      main: Colors.neutrals,
      onMain: Colors.white,
    },
  },
  typography: typographyCommon,
};
