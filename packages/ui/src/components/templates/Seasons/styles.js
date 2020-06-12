import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    list: {
      margin: '0 auto',
      padding: theme.spacing(0, 3),
    },
    item: {
      borderBottom: theme.separator,
      listStyleType: 'none',
      margin: theme.spacing(5, 0),
      padding: theme.spacing(0, 0, 5),
    },
  }),
  { name: 'seasons' },
);
