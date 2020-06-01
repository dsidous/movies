import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  season__wrapper: {
    margin: '0 auto',
    padding: '0 20px',
  },

  season__element: {
    borderBottom: theme.separator,
    listStyleType: 'none',
    margin: '40px 0',
    padding: '0 0 40px',
  },
}));
