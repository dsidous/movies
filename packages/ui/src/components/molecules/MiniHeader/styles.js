import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  (theme) => ({
    root: {
      borderBottom: theme.separatorBold,
      padding: theme.spacing(4, 3),
    },

    inner: {
      display: 'grid',
      gridTemplateColumns: '70px 4fr',
      gridColumnGap: theme.spacing(2),
      height: theme.spacing(13),
      margin: '0 auto',

      '& img': {
        height: '100%',
        maxWidth: '70px',
      },
    },

    info: {
      alignSelf: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyItems: 'center',
    },
  }),
  { name: 'miniHeader' }
);
