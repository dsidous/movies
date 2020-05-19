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
          color: '#999',
          cursor: 'pointer',
          textDecoration: 'none',
        },
      },

      '#root': {
        padding: '86px 0 100px',

        [theme.breakpoints.up('sm')]: {
          padding: '48px 0 100px',
        },
      },
    },
  }),
  { name: 'site' },
);
