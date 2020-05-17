import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      gridArea: 'mcrew',
      padding: '0 10px',

      [theme.breakpoints.up('sm')]: {
        padding: 0,
      },
    },

    item: {
      textAlign: 'left',
    },
  }),
  { name: 'topCrew' },
);
