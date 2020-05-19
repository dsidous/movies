import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  {
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
  },
  { name: 'season' },
);
