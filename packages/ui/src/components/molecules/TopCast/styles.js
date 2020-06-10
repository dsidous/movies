import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      gridArea: 'mcast',
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
      display: 'block',
      fontSize: '1.2em',
      fontWeight: theme.fontWeightBold,
      marginTop: theme.spacing(4),
    },
  }),
  { name: 'topCast' },
);
