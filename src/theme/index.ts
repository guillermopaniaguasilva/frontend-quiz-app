import { DefaultTheme } from 'styled-components';

const breakpoints = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1024px',
};

const colors = {
  purple: '#A729F5',
  darkNavy: '#1E2A32',
  navy: '#3B4D66',
  greyNavy: '#626C7F',
  lightBluish: '#ABC1E1',
  lightGrey: '#F4F6FA',
  white: '#FFFFFF',
  green: '#26D782',
  red: '#EE5454',
};

const fontSizes = {
  paragraph: '16px',
  heading: '40px',
};

const fontWeights = {
  extraLight: 300,
  light: 400,
  normal: 500,
  bold: 700,
};

const fontFamilies = {
  Rubik: 'Rubik',
};

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    colors: {
      purple: string;
      darkNavy: string;
      navy: string;
      greyNavy: string;
      lightBluish: string;
      lightGrey: string;
      white: string;
      green: string;
      red: string;
    };
    fontSizes: {
      paragraph: string;
      heading: string;
    };
    fontWeights: {
      extraLight: number;
      light: number;
      normal: number;
      bold: number;
    };
    fontFamilies: {
      Rubik: string;
    };
  }
}

const theme: DefaultTheme = {
  breakpoints,
  colors,
  fontSizes,
  fontWeights,
  fontFamilies,
};

export default theme;
