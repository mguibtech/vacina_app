import {ColorSchemeName} from 'react-native';
import {DefaltTheme} from 'styled-components';

export type themeType = 'light' | 'dark';

export interface Props {
  currentTheme: themeType;
  theme: DefaltTheme;
}

export interface colorSchemeProps {
  colorScheme: ColorSchemeName;
}
