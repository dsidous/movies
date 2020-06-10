import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      display: 'grid',
      gridGap: theme.spacing(3),
      gridTemplateColumns: '1fr',
      margin: '0 auto',
      padding: theme.spacing(0, 3),

      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: '1fr 1fr',
      },
    },

    col: {
      display: 'grid',
      gridAutoRows: 'min-content',
      gridGap: theme.spacing(1),

      '& h6 span': {
        color: '#999',
        fontSize: '.75em',
      },
    },

    item: {
      cursor: 'pointer',
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gridGap: theme.spacing(3),
      padding: theme.spacing(1, 0),

      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: '1fr 4fr',
      },

      '& img': {
        borderRadius: theme.shape.borderRadius,
        width: '100%',
      },
    },

    copy: {
      alignSelf: 'center',
    },
  }),
  { name: 'fullCastCrew' },
);
