import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  {
    root: {
      gridArea: 'mtrailer',
      alignSelf: 'flex-end',
      marginRight: 10,
    },

    playButton: {
      background: '#000',
      border: 'none',
      color: '#bbb',
      cursor: 'pointer',
      display: 'inline-block',
      fontSize: 12,
      margin: '20px 0 0',
      padding: '5px 10px',

      '&:hover': {
        color: '#999',
      },

      '& span': {
        margin: '0 5px 0 0',
      },
    },
  },
  { name: 'trailer' },
);
