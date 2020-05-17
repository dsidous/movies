import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      maxWidth: '1150px',
      margin: '0 auto',

      '& form': {
        margin: `${theme.spacing(5)}px 0 ${theme.spacing(2)}px`,
      },
    },
    item: {
      margin: '0 10px 20px',
    },
  }),
  { name: 'filter' },
);
