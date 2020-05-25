import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      [theme.breakpoints.up('sm')]: {
        margin: '0 auto',
      },
    },
  }),
  { name: 'topList' },
);
