import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      border: '1px solid #bbb',
      borderBottom: 'none',
      color: '#333',
      cursor: 'pointer',
      display: 'grid',
      gridColumnGap: 10,
      gridTemplateColumns: '1fr 1fr 8fr',
      gridAutoRows: 60,
      padding: '0 10px',
      textAlign: 'left',
      alignItems: 'center',

      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: '30px 70px 4fr',
      },

      '&:last-child': {
        borderBottom: '1px solid #bbb',
      },

      '&:hover': {
        background: '#bec1c2',
        color: '#333',
      },
    },

    poster: {
      margin: 0,
      textAlign: 'center',

      '& img': {
        display: 'block',
        height: 40,
        margin: '0 auto',
      },
    },

    release: {
      fontSize: '3vw',
      margin: 0,
      textAlign: 'center',

      [theme.breakpoints.up('sm')]: {
        fontSize: 14,
      },
    },

    title: {
      fontSize: '3vw',
      fontWeight: 'bold',
      margin: 0,

      [theme.breakpoints.up('sm')]: {
        fontSize: 16,
      },
    },

    character: {
      fontSize: '2.8vw',
      fontWeight: 'normal',

      [theme.breakpoints.up('sm')]: {
        fontSize: 14,
      },
    },
  }),
  { name: 'personShow' },
);
