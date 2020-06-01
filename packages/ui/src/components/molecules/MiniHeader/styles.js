import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      background: '#eee',
      borderBottom: theme.separatorBold,
      fontSize: '1em',
      padding: '30px 20px',
    },

    inner: {
      display: 'grid',
      gridTemplateColumns: '70px 4fr',
      gridColumnGap: 10,
      height: 100,
      margin: '0 auto',

      '& img': {
        height: '100%',
      },
    },

    info: {
      alignSelf: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyItems: 'center',

      '& h2': {
        margin: 0,

        '& span': {
          fontSize: '.65em',
        },
      },

      '& h4': {
        margin: '5px 0',

        '& a': {
          color: '#999',
        },
      },
    },
  }),
  { name: 'miniHeader' },
);
