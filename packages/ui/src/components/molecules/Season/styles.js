import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      display: 'grid',
      gridTemplateColumns: '1fr 4fr',
      gridColumnGap: 10,
      padding: '0 10px',
    },

    poster: {
      '& img': {
        cursor: 'pointer',
        width: '100%',
      },
    },

    details: {
      padding: 20,
    },

    last: {
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
  { name: 'season' },
);
