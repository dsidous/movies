import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  season__wrapper: {
    margin: '0 auto',
    padding: theme.spacing(0, 3),
  },

  season__element: {
    borderBottom: theme.separator,
    listStyleType: 'none',
    margin: theme.spacing(5, 0),
    padding: theme.spacing(0, 0, 5),
  },
}));
