import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      '& section': {
        maxWidth: theme.breakpoints.values.lg,
      },
    },

    backdrops: {
      display: 'none',

      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },

    header: {
      borderBottom: theme.separator,
      color: '#fff',
      display: 'block',
      position: 'relative',

      [theme.breakpoints.up('sm')]: {
        borderTop: theme.separator,
      },

      '&:before': {
        backgroundImage: ({ backdropURL }) => `url(${backdropURL})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        content: '" "',
        display: 'block',
        filter: 'brightness(120%) grayscale(1)',
        height: '100%',
        left: 0,
        position: 'absolute',
        right: 0,
        width: '100%',
        zIndex: '-1',
      },

      '&:after': {
        backgroundImage: ({ dcolor }) =>
          `radial-gradient(at 10% 30%,
          rgb(${dcolor[0]},${dcolor[1]},${dcolor[2]}) 0%, 
          #342931 100%
        )`,
        content: '" "',
        display: 'block',
        filter: 'opacity(92%)',
        height: '100%',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        transition: 'filter 1s',
        zIndex: '-1',
        width: '100%',
        willChange: 'opacity',
      },
    },

    headerInner: {
      display: 'grid',
      gridGap: theme.spacing(2),
      gridTemplateColumns: '1fr 2fr',
      gridTemplateAreas:
        '"mdata mdata" "mposter moverview" ". mtrailer" "mcrew mcrew"',
      padding: theme.spacing(3, 2, 5),
      position: 'relative',

      [theme.breakpoints.up('sm')]: {
        gridColumnGap: theme.spacing(5),
        gridTemplateColumns: 'minmax(200px, 1fr) minmax(400px, 2fr)',
        gridTemplateRows: 'auto',
        gridTemplateAreas:
          '"mposter mdata" "mposter moverview" "mposter mcrew" "mposter mtrailer" "mcast mcast"',
        margin: '0 auto',
        maxWidth: theme.breakpoints.values.lg,
        padding: theme.spacing(5, 3),
      },
    },

    tagline: {
      display: 'none',
    },

    poster: {
      gridArea: 'mposter',
      gridRow: '2 / 4',
      position: 'relative',

      [theme.breakpoints.up('sm')]: {
        gridRow: '1/5',
      },

      '& img': {
        borderRadius: 2,
        boxShadow: '0 0 20px -5px #000',
        display: 'block',
        width: '100%',
      },
    },

    data: {
      gridArea: 'mdata',
      padding: theme.spacing(2, 0),

      [theme.breakpoints.up('sm')]: {
        padding: 0,
      },
    },

    title: {
      color: '#fff',
      fontWeight: theme.fontWeightLight,
      letterSpacing: 1,
      margin: 0,

      [theme.breakpoints.up('sm')]: {
        margin: theme.spacing(3, 0, 0),
      },
    },

    rating: {
      border: 'none',
      color: '#fff',
      fontSize: 22,
      marginLeft: theme.spacing(3),
      paddingLeft: theme.spacing(3.5),
      position: 'relative',

      '&::before': {
        font: '20px/20px FontAwesome',
        color: '#e3cf7a',
        content: '"\\f005"',
        left: 0,
        position: 'absolute',
        top: 2,
      },

      '&::after': {
        fontSize: 12,
        bottom: 2,
        color: '#bbb',
        content: '"/10"',
        right: 'auto',
        top: 'auto',
      },
    },

    titleTags: {
      listStyle: 'none',
      margin: 0,
      padding: 0,

      '& li': {
        display: 'inline-block',
        padding: '0 10px',
        position: 'relative',

        '&:first-child': {
          paddingLeft: 0,
        },

        '&:not(:last-child):after': {
          content: '"\\2022"',
          position: 'absolute',
          right: '-4px',
          top: 0,
        },
      },
    },

    genres: {
      marginLeft: 0,
      padding: 0,

      '& li': {
        border: 'none',
        padding: theme.spacing(0, 0.25),

        '&:not(:last-child):after': {
          content: '","',
          position: 'relative',
          right: 0,
        },

        '&:last-child:after': {
          content: '" "',
        },
      },
    },

    overview: {
      gridArea: 'moverview',
      marginRight: theme.spacing(2),

      '& h4': {
        marginTop: 0,
      },
    },
  }),
  { name: 'show' },
);
