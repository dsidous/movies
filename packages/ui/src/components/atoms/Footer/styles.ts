import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      background: 'rgba(0, 0, 0, .6)',
      color: '#fff',
      fontSize: '0.7rem',
      marginTop: theme.spacing(20),
      padding: theme.spacing(2),
    },
  }),
  { name: 'footer' },
);
