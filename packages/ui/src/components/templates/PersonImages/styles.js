import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      display: 'grid',
      gridGap: '20px',
      gridTemplateColumns: 'repeat(2, 1fr)',
      margin: '40px auto',
      padding: '0 20px',

      [theme.breakpoints.up('sm')]: {
        gridGap: '40px',
        gridTemplateColumns: 'repeat(4, 1fr)',
        maxWidth: '960px',
      },
    },

    item: {
      borderRadius: '4px',
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
        padding: 10,

        '& p': {
          margin: 0,
        },
      },
    },
  }),
  { name: 'personImages' },
);
