import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      [theme.breakpoints.up('sm')]: {
        display: 'grid',
        gridTemplateColumns: '1fr 4fr',
        gridColumnGap: theme.spacing(2),
      },
    },

    poster: {
      '& img': {
        cursor: 'pointer',
        width: '100%',
      },
    },

    details: {
      padding: theme.spacing(3),
    },
  }),
  { name: 'season' },
);
