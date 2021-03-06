import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      background: '#000',

      '& .MuiList-root': {
        flexDirection: 'column',
        marginTop: theme.spacing(3),

        '& .MuiMenuItem-root': {
          padding: theme.spacing(0, 2),
          width: '100%',
        },
      },
    },
  }),
  { name: 'drawer' },
);
