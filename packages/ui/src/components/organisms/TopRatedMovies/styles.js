import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      display: 'grid',
      gridGap: theme.spacing(2),
      gridTemplateColumns: '1fr',
      margin: '0 auto',

      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: '1.555fr 2fr 2fr',
      },
    },

    header: {
      margin: theme.spacing(5, 'auto'),
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

      '&.featured': {
        [theme.breakpoints.up('sm')]: {
          gridRow: '1 / span 2',
        },
      },
    },

    title: {
      bottom: theme.spacing(2),
      color: '#fff',
      left: theme.spacing(2),
      position: 'absolute',
      textShadow: '0 0 5px #000',
    },

    menu: {
      listStyle: 'none',
      margin: theme.spacing(0, 'auto', 3),
      padding: 0,

      '& li': {
        cursor: 'pointer',
        display: 'inline',
        margin: theme.spacing(0, 2, 0, 0),

        '&.active': {
          fontWeight: theme.fontWeightBold,
        },

        '&:focus, & span:focus': {
          outline: 'none',
        },
      },
    },
  }),
  { name: 'featured' },
);
