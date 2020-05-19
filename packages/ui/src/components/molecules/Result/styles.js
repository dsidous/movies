import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      margin: '0 auto',
      maxWidth: 1150,
      padding: '0 10px',

      [theme.breakpoints.up('sm')]: {
        display: 'grid',
        gridGap: 40,
        gridArea: 'result',
        gridTemplateColumns: 'repeat(2,minmax(200px, 1fr))',
        margin: '0 auto',
      },
    },
  }),
  { name: 'result' },
);
