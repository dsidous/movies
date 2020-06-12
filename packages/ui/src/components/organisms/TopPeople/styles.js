import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    list: {
      display: 'grid',
      gridGap: theme.spacing(3),
      gridTemplateColumns: '1fr 1fr',
      textAlign: 'center',

      [theme.breakpoints.up('sm')]: {
        gridGap: theme.spacing(5),
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
    },

    item: {
      cursor: 'pointer',
      margin: 0,
      overflow: 'hidden',

      '& img': {
        borderRadius: theme.shape.borderRadius,
        boxShadow: '0 0 20px 5px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease-in',
        width: '100%',
      },

      '&:hover img': {
        transform: 'scale(1.035)',
      },

      '&:hover $name': {
        color: '#000',
      },
    },

    name: {
      color: '#666',
      margin: theme.spacing(1, 0),
      transition: 'all 0.3s ease-in',
    },
  }),
  { name: 'topPeople' },
);
