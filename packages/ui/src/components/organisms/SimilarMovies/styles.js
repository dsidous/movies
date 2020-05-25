import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      borderTop: theme.separator,
      margin: '40px auto 0',

      '& h4': {
        padding: '10px 0 20px',
      },
    },

    slider: {
      [theme.breakpoints.up('sm')]: {
        margin: '0 40px',
      },
    },

    slide: {
      cursor: 'pointer',
      textAlign: 'center',
      padding: '0 10px',

      '& img': {
        borderRadius: '4px',
        width: '100%',
      },

      '& small': {
        display: 'block',
        padding: 10,
      },
    },
  }),
  { name: 'similarShows' },
);
