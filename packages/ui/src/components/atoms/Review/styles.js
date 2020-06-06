import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      background: '#eee',
      marginBottom: theme.spacing(5),
      padding: theme.spacing(6, 4),
      width: '100%',
    },

    author: {
      fontWeight: 'bold',
      margin: theme.spacing(0, 0, 2),
    },

    content: {
      display: 'flex',
      flexDirection: 'column',
      whiteSpace: 'pre-line',
    },
  }),
  { name: 'review' },
);
