import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      display: 'grid',
      gridGap: '20px',
      gridTemplateColumns: '1fr',
      margin: '0 auto',
      padding: '0 20px',

      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: '1fr 1fr',
      },
    },

    col: {
      display: 'grid',
      gridAutoRows: 'min-content',
      gridGap: theme.spacing(1),

      '& h3 span': {
        color: '#999',
        fontSize: '.75em',
      },
    },

    item: {
      cursor: 'pointer',
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gridGap: '20px',
      padding: '10px 0',

      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: '1fr 4fr',
      },

      '& img': {
        borderRadius: 4,
        width: '100%',
      },
    },

    copy: {
      alignSelf: 'center',
    },
  }),
  { name: 'fullCastCrew' },
);
