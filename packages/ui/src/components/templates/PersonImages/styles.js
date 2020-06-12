import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      display: 'grid',
      gridGap: theme.spacing(2),
      gridTemplateColumns: 'repeat(2, 1fr)',

      [theme.breakpoints.up('sm')]: {
        gridGap: theme.spacing(5),
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
    },

    item: {
      borderRadius: theme.shape.borderRadius,
      boxShadow: '0 0 20px 5px rgba(0, 0, 0, 0.1)',
      margin: 0,
      overflow: 'hidden',

      '& a': {
        color: '#000',

        '&:hover, &:visited, &:focus': {
          color: '#000',
          textDecoration: 'none',
        },
      },

      '& img': {
        width: '100%',
      },

      '& figcaption': {
        padding: theme.spacing(2),

        '& p': {
          margin: 0,
        },
      },
    },
  }),
  { name: 'personImages' },
);
