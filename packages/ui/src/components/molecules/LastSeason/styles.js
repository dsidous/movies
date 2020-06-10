import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    allBtn: {
      display: 'inline-block',
      fontSize: '1.2em',
      fontWeight: 'bold',
      margin: theme.spacing(3, 0),
    },
  }),
  { name: 'lastSeason' },
);
