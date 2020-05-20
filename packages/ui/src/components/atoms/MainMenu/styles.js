import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      display: 'flex',
      flexGrow: 1,
      padding: 0,
    },
    item: {
      color: '#fff',
      textDecoration: 'none',

      '& span': {
        fontWeight: theme.fontWeightBold,
      },
    },
  }),
  { name: 'mainMenu' },
);
