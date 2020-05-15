import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      display: 'grid',
      gridGap: '10px',
      gridTemplateColumns: '1fr',
      margin: '0 auto',
      padding: '0 10px',

      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: '1.555fr 2fr 2fr',
        width: '70%',
      },
    },

    header: {
      margin: '40px auto',
      padding: '0 10px',

      [theme.breakpoints.up('sm')]: {
        width: '70%',
      },
    },

    item: {
      cursor: 'pointer',
      position: 'relative',

      '& img': {
        display: 'block',
        transition: 'all 0.3s ease-in',
        width: '100%',
      },

      '&:hover img': {
        opacity: '.8',
        transform: 'scale(.98)',
      },
    },

    title: {
      bottom: 10,
      color: '#fff',
      left: 10,
      position: 'absolute',
      textShadow: '0 0 5px #000',
    },

    featured: {
      [theme.breakpoints.up('sm')]: {
        gridRow: '1 / span 2',
      },
    },

    menu: {
      listStyle: 'none',
      margin: '0 auto 20px',
      padding: '0 10px',
      width: '70%',

      '& li': {
        cursor: 'pointer',
        display: 'inline',
        margin: '0 10px 0 0',

        '&.active': {
          fontWeight: 'bold',
        },

        '&:focus, & span:focus': {
          outline: 'none',
        },
      },
    },
  }),
  { name: 'featured' },
);