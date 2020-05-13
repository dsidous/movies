import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  episode: {
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
    gridColumnGap: 10,
    padding: '0 10px',
  },
  'episode-poster': {
    '& img': {
      width: '100%',
    },
  },

  'episode-details': {
    padding: '0 20px',

    '& h3': {
      marginTop: 0,
    },
  },
}));
