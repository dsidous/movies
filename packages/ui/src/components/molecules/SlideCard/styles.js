import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      cursor: 'pointer',
      display: 'block',
      paddingRight: theme.spacing(2),

      '& img': {
        borderRadius: theme.shape.borderRadius,
        width: '100%',
      },
    },
    inner: {
      margin: 0,
      padding: 0,

      '& figcaption': {
        fontWeight: 600,
        padding: theme.spacing(1),

        '& span': {
          display: 'block',
          fontWeight: 300,
        },
      },
    },
  }),
  { name: 'slideCard' },
);
