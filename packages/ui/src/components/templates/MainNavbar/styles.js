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
  // menuList: {
  //   display: 'flex',
  //   flexGrow: 1,
  //   padding: 0,
  // },
  // menuListUser: {
  //   display: 'flex',
  //   padding: 0,
  // },
  // menuItem: {
  //
  // },
  searchMenu: {
    overflow: 'visible',
  },
}));
