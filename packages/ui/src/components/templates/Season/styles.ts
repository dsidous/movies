import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  header: {
    alignItems: 'center',
    borderBottom: theme.separatorBold,
    display: 'flex',
    padding: theme.spacing(4, 0),
  },

  list: {
    padding: 0,
  },

  item: {
    borderBottom: theme.separator,
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(2),

    '& h6': {
      marginBottom: theme.spacing(2),
    },
  },
  season__wrapper: {
    margin: '0 auto',
    padding: theme.spacing(0, 3),
  },

  season__element: {
    borderBottom: theme.separator,
    listStyleType: 'none',
    margin: theme.spacing(5, 0),
    padding: theme.spacing(0, 0, 5),
  },
}));
