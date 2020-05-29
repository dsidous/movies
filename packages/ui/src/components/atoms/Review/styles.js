import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      background: '#eee',
      borderRadius: 4,
      boxShadow: '0 0 40px rgba(0,0,0,0.1)',
      marginBottom: theme.spacing(5),
      padding: '35px 15px',
      width: '100%',
    },

    author: {
      fontSize: '4vw',
      fontWeight: 'bold',
      margin: '0 0 20px',
      [theme.breakpoints.up('sm')]: {
        fontSize: '16px',
      },
    },

    content: {
      display: 'flex',
      flexDirection: 'column',
      fontSize: '3vw',
      whiteSpace: 'pre-line',
      [theme.breakpoints.up('sm')]: {
        fontSize: '14px',
        lineHeight: 1.6,
      },
    },
  }),
  { name: 'review' },
);
