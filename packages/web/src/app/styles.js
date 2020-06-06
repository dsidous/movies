import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    '@global': {
      body: {
        background: theme.bgColor,
        minHeight: '100vh',
      },

      a: {
        color: '#666',
        textDecoration: 'none',

        '&:hover': {
          color: '#000',
          cursor: 'pointer',
          textDecoration: 'none',
        },
      },

      '#root': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '100vh',
        padding: '86px 0 0',

        [theme.breakpoints.up('sm')]: {
          padding: '48px 0 0',
        },
      },
    },
  }),
  { name: 'site' },
);
