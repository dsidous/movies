import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      textAlign: 'center',
      verticalAlign: 'top',

      '& .movie-no-image-holder, & img': {
        borderRadius: theme.shape.borderRadius,
        boxShadow: '0 0 20px 5px rgba(0,0,0,.1)',
        cursor: 'pointer',
        width: '100%',
      },
    },
  }),
  { name: 'known' },
);
