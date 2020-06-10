import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      margin: '0 auto',
      padding: 0,

      [theme.breakpoints.up('sm')]: {
        display: 'grid',
        gridGap: theme.spacing(5),
        gridArea: 'result',
        gridTemplateColumns: 'repeat(2,minmax(200px, 1fr))',
        margin: '0 auto',
      },
    },
  }),
  { name: 'result' },
);
