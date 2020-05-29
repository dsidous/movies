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

    list: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      padding: '0 20px 20px',
    },
  }),
  { name: 'reviews' },
);
