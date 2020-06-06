import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      gridArea: 'mtrailer',
      alignSelf: 'flex-end',
      marginRight: theme.spacing(1),
    },

    playButton: {
      background: '#000',
      color: '#bbb',

      '&:hover': {
        background: '#000',
        color: '#fff',
      },
    },
  }),
  { name: 'trailer' },
);
