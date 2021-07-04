import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      [theme.breakpoints.up('sm')]: {
        display: 'grid',
        gridTemplateColumns: '1fr 4fr',
        gridColumnGap: theme.spacing(5),
      },
    },

    poster: {
      width: '100%',
    },

    details: {
      '& h3': {
        marginTop: 0,
      },
    },
  }),
  { name: 'episode' },
);
