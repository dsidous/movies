import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      padding: '35px 15px',
      width: '100%',

      '& label': {
        background: '#000',
        color: '#bbb',
        cursor: 'pointer',
        float: 'right',
        fontSize: '10px',
        margin: '10px 0 0',
        padding: '5px 10px',

        '&::before': {
          content: '"More"',
        },
      },

      '&:not(:last-child)': {
        borderBottom: '1px solid #444',
      },
    },

    author: {
      fontSize: '4vw',
      fontWeight: 'bold',
      margin: '0 0 20px',
      [theme.breakpoints.up('sm')]: {
        fontSize: '16px',
      },
    },

    content: {
      fontSize: '3vw',
      whiteSpace: 'pre-line',
      [theme.breakpoints.up('sm')]: {
        fontSize: '14px',
        lineHeight: 1.6,
      },

      '&.long::after': {
        content: '" ..."',
      },
    },

    hidden: {
      opacity: 0,
      maxHeight: 0,
      fontSize: 0,
      transition: '0.25s ease',
      whiteSpace: 'normal',
    },

    more: {
      display: 'none',

      '&:checked ~ $content.long::after': {
        display: 'none',
      },

      '&:checked ~ $content $hidden': {
        opacity: 1,
        fontSize: 'inherit',
        maxHeight: '999em',
        whiteSpace: 'pre-line',
      },

      '&:checked ~ label::before': {
        content: '"Less"',
      },
    },
  }),
  { name: 'review' },
);
