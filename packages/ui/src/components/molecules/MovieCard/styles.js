import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      listStyle: 'none',
      background: theme.cardBg,
      borderRadius: theme.shape.borderRadius * 2,
      margin: theme.spacing(3, 0),
      position: 'relative',
      boxShadow: '0 0 30px 10px rgba(107, 106, 106, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: theme.spacing(1),

      [theme.breakpoints.up('sm')]: {
        margin: 0,
        padding: 0,
      },

      [theme.breakpoints.up('md')]: {
        display: 'grid',
        gridTemplateColumns: 'minmax(115px, 1fr) minmax(200px, 2fr)',
        gridColumnGap: theme.spacing(2),
        gridTemplateRows: theme.spacing(6, 5),
      },

      '& a': {
        [theme.breakpoints.up('sm')]: {
          gridRow: '1 / 4',
        },
      },
    },

    poster: {
      borderRadius: [
        [theme.shape.borderRadius * 2, theme.shape.borderRadius * 2, 0, 0],
      ],
      display: 'block',
      height: '100%',
      width: '100%',

      [theme.breakpoints.up('md')]: {
        borderRadius: [
          [theme.shape.borderRadius * 2, 0, 0, theme.shape.borderRadius * 2],
        ],
      },
    },

    title: {
      display: 'block',
      marginLeft: theme.spacing(2),
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: '70%',

      [theme.breakpoints.up('md')]: {
        marginLeft: 0,
      },
    },

    rating: {
      display: 'block',
      margin: theme.spacing(2, 2, 0, 0),
      paddingLeft: theme.spacing(2),
      position: 'relative',
      textAlign: 'right',

      '&:before': {
        fontFamily: 'FontAwesome',
        color: '#666',
        content: '"\\f005"',
        left: 0,
        position: 'absolute',
      },
    },

    year: {
      float: 'left',
      marginLeft: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      position: 'relative',

      [theme.breakpoints.up('md')]: {
        marginLeft: 0,
      },

      '&:before': {
        content: '"\\f073"',
        left: 0,
        font: '12px/12px FontAwesome',
        position: 'absolute',
        top: theme.spacing(1),
      },
    },

    genres: {
      display: 'block',
      float: 'right',
      margin: theme.spacing(1, 2, 2, 0),
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
        margin: theme.spacing(3, 2),
      },

      [theme.breakpoints.up('md')]: {
        marginLeft: 0,
      },

      '&.long::after': {
        content: '"..."',
      },
    },
  }),
  { name: 'showCard' },
);
