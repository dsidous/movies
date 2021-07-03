import { fade, makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  inputRoot: {
    color: 'inherit',
    '&:before': {
      display: 'none',
    },
    '&:after': {
      display: 'none',
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(15),
      '&:focus': {
        width: theme.spacing(25),
      },
    },
  },
  iconButton: {
    background: '#fff',
    borderRadius: 0,
    color: '#000',
    height: '31px',
  },
  container: {
    color: theme.palette.common.black,
    display: 'flex',
    backgroundColor: theme.palette.common.white,
    left: theme.spacing(-2),
    marginLeft: 0,
    position: 'absolute',
    top: theme.spacing(6),
    width: '100vw',
    [theme.breakpoints.up('sm')]: {
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.55),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.65),
      },
      left: 'auto',
      marginLeft: theme.spacing(1),
      position: 'relative',
      top: 'auto',
      width: 'auto',
    },
  },
  paper: {
    left: 0,
    marginTop: theme.spacing(1),
    maxHeight: theme.spacing(25),
    overflowY: 'scroll',
    paddingLeft: 0,
    position: 'absolute',
    top: theme.spacing(4),
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  thumbnail: {
    height: theme.spacing(6),
    marginRight: theme.spacing(2),
  },
}));
