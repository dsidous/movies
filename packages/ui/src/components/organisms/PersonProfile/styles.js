import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      margin: '20px 10px',

      [theme.breakpoints.up('sm')]: {
        margin: '40px auto',
        maxWidth: 980,
        padding: '0 20px',
      },
    },

    infoRoot: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gridTemplateAreas: '"poster poster" "info info" "bio bio"',
      gridGap: '10px',

      [theme.breakpoints.up('sm')]: {
        gridColumnGap: 40,
        gridTemplateColumns: '1fr 2fr',
        gridTemplateRows: '100px auto',
        gridTemplateAreas: '"poster info" "poster bio"',
        margin: '0 0 40px',
      },
    },

    poster: {
      gridArea: 'poster',

      '& img': {
        borderRadius: '4px',
        boxShadow: '0 0 20px -5px #000',
        height: 'auto',
        maxWidth: '100%',
      },

      '& a': {
        display: 'block',
        color: '#000',
        position: 'relative',

        '&::after': {
          background: 'rgba(0,0,0,.8)',
          content: '" "',
          height: '100%',
          left: 0,
          opacity: 0,
          position: 'absolute',
          top: 0,
          transition: 'all linear .3s',
          visibility: 'hidden',
          width: '100%',
        },

        '&:hover::after': {
          opacity: 1,
          visibility: 'visible',
        },

        '&::before': {
          content: '"Show images"',
          color: '#fff',
          fontSize: '2em',
          left: '50%',
          position: 'absolute',
          textAlign: 'center',
          top: '50%',
          transform: 'translate(-50%,-50%)',
          visibility: 'hidden',
          zIndex: 2,
        },

        '&:hover::before': {
          visibility: 'visible',
        },
      },
    },

    info: {
      gridArea: 'info',
    },

    name: {
      fontWeight: '$fw-n',
      marginBottom: 0,
      marginTop: 0,

      [theme.breakpoints.up('sm')]: {
        fontSize: '4em',
        position: 'relative',

        '&::after': {
          color: 'rgba(170,170,170,.2)',
          content: 'attr(data-name)',
          fontSize: '1.3em',
          fontWeight: 'bold',
          left: '-20px',
          position: 'absolute',
          top: '-20px',
        },
      },
    },

    bioRoot: {
      gridArea: 'bio',
    },

    bio: {
      whiteSpace: 'pre-line',

      '&.long::after': {
        content: '" ..."',
      },

      '& label': {
        background: '#000',
        color: '#bbb',
        cursor: 'pointer',
        float: 'right',
        fontSize: 10,
        margin: '40px 10px 0 0',
        padding: '5px 10px',

        '&::before': {
          content: '"More"',
        },
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

      '&:checked ~ $bio.long::after': {
        display: 'none',
      },

      '&:checked ~ $bio $hidden': {
        opacity: 1,
        fontSize: 'inherit',
        maxHeight: '999em',
        whiteSpace: 'pre-line',
      },

      '&:checked ~ $bio label::before': {
        content: '"Less"',
      },
    },

    showsRoot: {
      borderTop: '$separator',
      margin: '40px 0 0',

      '& h4': {
        padding: '20px 0',

        [theme.breakpoints.up('sm')]: {
          '&:last-of-type': {
            margin: '0 auto',
            width: '80%',
          },
        },
      },
    },

    knowns: {
      display: 'grid',
      gridGap: 10,
      gridTemplateColumns: 'repeat(2, 1fr)',

      [theme.breakpoints.up('sm')]: {
        gridGap: 40,
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
    },

    shows: {
      display: 'grid',
      gridGap: 0,
      gridTemplateColumns: '1fr',

      [theme.breakpoints.up('sm')]: {
        margin: '0 auto',
        width: '80%',
      },
    },
  }),
  { name: 'person' },
);
