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
        fontWeight: theme.fontWeightBold,
        padding: theme.spacing(1),

        '& span': {
          display: 'block',
          fontWeight: theme.fontWeightNormal,
        },
      },
    },
  }),
  { name: 'slideCard' },
);
