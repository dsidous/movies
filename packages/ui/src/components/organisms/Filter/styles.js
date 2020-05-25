import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      margin: '0 auto',

      '& form': {
        display: 'grid',
        gridGap: theme.spacing(1),
        gridAutoFlow: 'column',
        margin: theme.spacing(5, 0, 2),
      },
    },
  }),
  { name: 'filter' },
);
