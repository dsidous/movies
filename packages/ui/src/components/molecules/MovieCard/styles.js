import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      listStyle: 'none',
      background: theme.cardBg,
      borderRadius: 8,
      margin: '10px 0 20px',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 0 30px 10px rgba(107, 106, 106, 0.1)',

      [theme.breakpoints.up('sm')]: {
        display: 'grid',
        gridColumnGap: 10,
        gridTemplateRows: '40px 40px',
        margin: 0,
        padding: 0,
      },

      [theme.breakpoints.up('md')]: {
        display: 'grid',
        gridTemplateColumns: 'minmax(115px, 1fr) minmax(200px, 2fr)',
        gridColumnGap: 10,
        gridTemplateRows: '40px 40px',
        padding: 0,
      },

      '& a': {
        [theme.breakpoints.up('sm')]: {
          gridRow: '1 / 4',
        },
      },
    },

    poster: {
      cursor: 'pointer',
      display: 'block',
      height: '100%',
      width: '100%',
    },

    noImage: {
      background: '#666',
      color: '#444',
      cursor: 'pointer',
      font: '65px/240px FontAwesome',
      height: 240,
      textAlign: 'center',
      width: 165,

      '&:before': {
        content: '"\f03e"',
      },
    },

    title: {
      display: 'block',
      float: 'left',
      fontSize: 20,
      margin: '10px 0 0 10px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: '70%',
    },

    rating: {
      display: 'block',
      float: 'right',
      fontSize: 20,
      margin: '10px 10px 0 0',
      paddingLeft: 22,
      position: 'relative',
      textAlign: 'right',

      '&:before': {
        font: '20px/20px FontAwesome',
        color: '#666',
        content: '"\\f005"',
        left: 0,
        position: 'absolute',
      },
    },

    year: {
      float: 'left',
      margin: '5px 0 0 10px',
      paddingLeft: 14,
      position: 'relative',

      '&:before': {
        content: '"\\f073"',
        left: 0,
        font: '12px/12px FontAwesome',
        position: 'absolute',
        top: 3,
      },
    },

    genres: {
      display: 'block',
      float: 'right',
      margin: '5px 10px 10px 0',
      overflow: 'hidden',
      textAlign: 'right',
      fontStyle: 'italic',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: '70%',
    },

    overview: {
      display: 'none',

      [theme.breakpoints.up('sm')]: {
        display: 'block',
        margin: '20px 10px',
      },

      '&.long::after': {
        content: '"..."',
      },
    },
  }),
  { name: 'showCard' },
);
