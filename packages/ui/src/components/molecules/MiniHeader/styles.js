import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  'mini-header': {
    background: '#eee',
    borderTop: '10px solid #ddd',
    borderBottom: '10px solid #ddd',
    fontSize: '1em',
    padding: '30px 20px',
  },

  'mini-header__inner': {
    display: 'grid',
    gridTemplateColumns: '70px 4fr',
    gridColumnGap: 10,
    height: 100,
    maxWidth: 900,
    margin: '0 auto',

    '& img': {
      height: '100%',
    },
  },

  'mini-header__info': {
    alignSelf: 'center',

    '& h2': {
      margin: 0,

      '& span': {
        fontSize: '.65em',
      },
    },

    '& h4 a': {
      color: '#999',
    },
  },
}));
