import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      borderTop: theme.separator,
      margin: '40px auto 0',
      [theme.breakpoints.up('sm')]: {
        maxWidth: 960,
      },

      '& h4': {
        margin: '20px 10px',
      },
    },

    allBtn: {
      background: 'none',
      border: 'none',
      color: '#666',
      display: 'inline-block',
      fontSize: '1.2em',
      fontWeight: 'bold',
      margin: '20px 10px',
    },
  }),
  { name: 'lastSeason' },
);
