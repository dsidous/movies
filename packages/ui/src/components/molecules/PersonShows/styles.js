import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      background: '#fff',
      border: '1px solid #bbb',
      borderBottom: 'none',
      color: '#333',
      cursor: 'pointer',
      display: 'grid',
      gridColumnGap: 10,
      gridTemplateColumns: '1fr 6fr',
      gridTemplateAreas: '"poster release" "poster title" "poster rating"',
      padding: '10px',
      textAlign: 'left',
      alignItems: 'center',
      justifyItems: 'start',

      [theme.breakpoints.up('sm')]: {
        gridAutoRows: theme.spacing(11),
        gridTemplateColumns: '72px 4fr 70px 100px',
        gridTemplateAreas: '"poster title release rating"',
      },

      '&:nth-child(odd)': {
        background: '#f2f2f2',
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
      gridArea: 'poster',
      margin: 0,
      textAlign: 'center',

      '& img': {
        display: 'block',
        height: theme.spacing(9),
        margin: '0 auto',
      },
    },

    release: {
      gridArea: 'release',
      fontSize: '3vw',
      margin: 0,
      textAlign: 'center',

      [theme.breakpoints.up('sm')]: {
        fontSize: 14,
        gridColumn: '3 / 4',
      },
    },

    title: {
      gridArea: 'title',
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

    rating: {
      gridArea: 'rating',
    },
  }),
  { name: 'personShow' },
);
