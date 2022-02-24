import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    paper: {
      marginTop: theme.spacing(3),
      padding: theme.spacing(5, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }),
  { name: 'signUp' },
);
