import { red } from '@material-ui/core/colors';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export const cssVariables = {
  bgColor: 'linear-gradient(to bottom, #ECF0F3, #d4d0d0)',
  cardBg: 'linear-gradient(to bottom, #ffffff, #eeeded) fixed',
  separator: '5px solid #bcbcbc',
  separatorBold: '10px solid #ddd',
  fontSecondary: '"Open Sans", serif',
  fontWeightLight: '300',
  fontWeightNormal: '500',
  fontWeightBold: '700',
};

// A custom theme for this app
let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [
      '"Roboto"',
      '"Open Sans"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    subtitle2: {
      fontWeight: cssVariables.fontWeightBold,
    },
  },
  overrides: {
    MuiSkeleton: {
      root: {
        backgroundColor: 'rgba(0,0,0, .1)',
      },
    },
  },
});

export default theme = responsiveFontSizes(theme);
