import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      display: 'grid',

      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: '1fr 1fr',
        margin: '0 auto',
        width: '70%    ',
      },
    },
  }),
  { name: 'topList' },
);
