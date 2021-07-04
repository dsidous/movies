import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    list: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      padding: theme.spacing(0, 3, 3),
    },
  }),
  { name: 'reviews' },
);
