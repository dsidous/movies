import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  cast__element: {
    '&.top': {
      borderRadius: 4,
      boxShadow: '0 0 40px rgba(0,0,0,.1)',
      padding: '0 0 10px',
      textAlign: 'center',
      overflow: 'hidden',

      '& a': {
        color: '#666',
      },

      '& .cast__img': {
        cursor: 'pointer',
        margin: '0 0 10px',
        width: '100%',
      },
    },

    '&.full a': {
      color: '#666',
      cursor: 'pointer',
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gridGap: 20,
      padding: '10px 0',

      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: '1fr 4fr',
      },

      '& .cast__img': {
        borderRadius: 4,
        width: '100%',
      },
    },
  },

  cast__copy: {
    alignSelf: 'center',
  },
}));
