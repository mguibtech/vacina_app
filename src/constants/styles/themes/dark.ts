import {DefaltTheme} from 'styled-components';
import {Colors} from './colors';
import {typographyCommon} from './common';

export const themeDark: DefaltTheme = {
  colors: {
    primary: {
      main: Colors.brand05,
      onMain: Colors.white,
    },
    secondary: {
      main: Colors.brand02,
      onMain: Colors.white,
    },
    error: {
      main: Colors.red,
      onMain: Colors.white,
    },
    background: {
      main: Colors.black,
      onMain: Colors.white,
    },
    surface: {
      main: Colors.white,
      onMain: Colors.neutrals,
    },
  },
  typography: typographyCommon,
};
