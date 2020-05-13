import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    list: {
      margin: '0 auto',
      maxWidth: 960,
      padding: '0 20px',
    },
    item: {
      borderBottom: theme.separator,
      listStyleType: 'none',
      margin: '40px 0',
      padding: '0 0 40px',
    },
  }),
  { name: 'seasons' },
);
