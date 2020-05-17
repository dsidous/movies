import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: `${theme.spacing(2)}px 0`,
    },
  }),
  { name: 'pager' },
);
