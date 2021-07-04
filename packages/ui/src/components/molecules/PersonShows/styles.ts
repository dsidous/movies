import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      background: '#fff',
      border: '1px solid #bbb',
      borderBottom: 'none',
      display: 'grid',
      gridColumnGap: theme.spacing(2),
      gridTemplateColumns: '1fr 6fr',
      gridTemplateAreas: '"poster release" "poster title" "poster rating"',
      padding: theme.spacing(2),
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

      '& img': {
        display: 'block',
        height: theme.spacing(9),
        margin: '0 auto',
      },
    },

    release: {
      gridArea: 'release',
      margin: 0,

      [theme.breakpoints.up('sm')]: {
        gridColumn: '3 / 4',
      },
    },

    title: {
      gridArea: 'title',
      margin: 0,
    },

    rating: {
      gridArea: 'rating',
    },
  }),
  { name: 'personShow' },
);
