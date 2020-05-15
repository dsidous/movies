import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      margin: '20px auto',
      maxWidth: '960px',
      padding: '0 10px',

      '& h2': {
        margin: '40px 0',
      },
    },
    list: {
      display: 'grid',
      gridGap: '20px',
      gridTemplateColumns: '1fr 1fr',
      margin: '20px 0',
      textAlign: 'center',

      [theme.breakpoints.up('sm')]: {
        gridGap: '40px',
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
    },

    item: {
      cursor: 'pointer',
      margin: 0,
      overflow: 'hidden',

      '& img': {
        borderRadius: 4,
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
      margin: '5px 0 0',
      transition: 'all 0.3s ease-in',
    },
  }),
  { name: 'topPeople' },
);
