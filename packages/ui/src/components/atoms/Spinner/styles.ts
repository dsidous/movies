import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  {
    root: {
      display: 'grid',
      gridTemplateRows: '100vh',
      width: '100%',

      '& i': {
        alignSelf: 'center',
        justifySelf: 'center',
      },
    },
  },
  { name: 'spinner' },
);
