import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

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
    background: {
      default: '#000',
    },
  },
});

export const cssVariables = {
  bgColor: 'linear-gradient(to bottom, #ECF0F3, #d4d0d0)',
  cardBg: 'linear-gradient(to bottom, #ffffff, #eeeded) fixed',
  separator: '5px solid #bcbcbc',
};
