import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  {
    appear: {
      opacity: 0.01,
    },
    enter: {
      opacity: 0.01,
    },

    appearActive: {
      opacity: 1,
      transition: 'opacity 0.2s ease-in',
    },

    enterActive: {
      opacity: 1,
      transition: 'opacity 0.2s ease-in',
    },
  },
  { name: 'fade' },
);
