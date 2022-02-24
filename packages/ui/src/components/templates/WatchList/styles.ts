import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    list: {
      padding: 0,

      [theme.breakpoints.up('sm')]: {
        display: 'grid',
        gridGap: theme.spacing(5),
        gridTemplateColumns: 'repeat(2,minmax(200px, 1fr))',
      },
    },
  }),
  { name: 'watchlist' },
);
