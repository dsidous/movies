import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      gridArea: 'mcast',

      [theme.breakpoints.up('sm')]: {
        margin: '0 auto',
      },

      '& h4': {
        padding: '20px 0',
      },
    },

    castWrapper: {
      display: 'grid',
      gridGap: 10,
      gridTemplateColumns: 'repeat(auto-fit, minmax(7em, 1fr))',

      [theme.breakpoints.up('sm')]: {
        gridGap: 20,
        gridTemplateColumns: 'repeat(6, 1fr)',
      },
    },

    fullCaCrBtn: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1.2em',
      fontWeight: 'bold',
      margin: '30px 0 0',

      '&:hover': {
        opacity: '.6',
      },
    },
  }),
  { name: 'topCast' },
);
