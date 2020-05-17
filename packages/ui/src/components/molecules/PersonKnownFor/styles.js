import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  {
    root: {
      textAlign: 'center',
      verticalAlign: 'top',

      '& .movie-no-image-holder, & img': {
        borderRadius: 4,
        boxShadow: '0 0 20px 5px rgba(0,0,0,.1)',
        cursor: 'pointer',
        margin: '0 0 10px',
        width: '100%',
      },
    },
  },
  { name: 'known' },
);
