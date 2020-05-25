import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      margin: '40px 0 80px',
    },
    title: {
      fontSize: '1.8em',
      margin: '20px 0 30px',
    },

    list: {
      listStyle: 'none',
      padding: '0',
    },

    item: {
      '& a': {
        color: '#333',
        cursor: 'pointer',
        fontSize: '1.1em',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        padding: '10px 0',

        '&:hover': {
          color: '#666',
        },

        '& img': {
          margin: '0 15px 0 0',
          width: '50px',

          [theme.breakpoints.up('sm')]: {
            width: '30px',
          },
        },
      },
    },

    dataTitle: {
      overflow: 'hidden',
      width: '90%',
    },

    dataGenres: {
      fontSize: '0.8em',
      fontStyle: 'italic',
      overflow: 'hidden',
      width: '90%',
    },
  }),
  { name: 'homeList' },
);
