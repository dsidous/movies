import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const cssVariables = {
  bgColor: 'linear-gradient(to bottom, #ECF0F3, #d4d0d0)',
  cardBg: 'linear-gradient(to bottom, #ffffff, #eeeded) fixed',
  separator: '5px solid #bcbcbc',
  fontSecondary: '"Open Sans", serif',
  fontWeightLight: '300',
  fontWeightNormal: '500',
  fontWeightBold: '700',
};

// A custom theme for this app
export const theme = createMuiTheme({
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
  },
});
