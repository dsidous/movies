import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      '& a': {
        display: 'block',
      },

      '& img': {
        width: '100%',
      },

      '&.top': {
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[12],
        textAlign: 'center',
        overflow: 'hidden',
      },

      '&.full a': {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gridGap: theme.spacing(3),

        [theme.breakpoints.up('sm')]: {
          gridTemplateColumns: '1fr 4fr',
        },

        '& img': {
          borderRadius: theme.shape.borderRadius,
        },
      },
    },

    copy: {
      alignSelf: 'center',
    },
  }),
  { name: 'cast' },
);
