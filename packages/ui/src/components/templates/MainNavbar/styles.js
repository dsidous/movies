import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    background: '#1f1d1d',
    maxHeight: '63px',
  },

  logo: {
    color: '#fff',
    textDecoration: 'none',

    '& h6': {
      fontWeight: theme.fontWeightBold,
      marginRight: theme.spacing(2),
      whiteSpace: 'nowrap',
    },
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  searchMenu: {
    overflow: 'visible',
  },
}));
