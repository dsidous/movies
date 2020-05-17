import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      cursor: 'pointer',
      left: 15,
      position: 'absolute',
      top: '-8px',
    },

    icon: {
      color: '#FBC500',
      fontSize: '3rem',
      textShadow: '2px 2px 8px #000',
      transition: '.3s linear',

      [theme.breakpoints.up('sm')]: {
        fontSize: '5rem',
      },
    },
  }),
  { name: 'bookmark' },
);
