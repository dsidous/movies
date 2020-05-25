import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    list: {
      margin: '50px auto',
      padding: 0,

      [theme.breakpoints.up('sm')]: {
        display: 'grid',
        gridGap: 40,
        gridArea: 'result',
        gridTemplateColumns: 'repeat(2,minmax(200px, 1fr))',
      },
    },
  }),
  { name: 'watchlist' },
);
