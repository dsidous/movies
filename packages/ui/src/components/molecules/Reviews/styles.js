import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      borderTop: theme.separator,
      margin: '40px auto 0',
      maxWidth: 960,
      padding: '0 10px',

      '& h4': {
        padding: '10px 0 20px',
      },
    },

    list: {
      background: '#eee',
      borderRadius: 4,
      boxShadow: '0 0 40px rgba(0,0,0,0.1)',
      display: 'grid',
      gridTemplateColumns: '1fr',
      padding: '0 20px 20px',
    },
  }),
  { name: 'reviews' },
);
