import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      '&:hover': {
        '& $nextArrow, & $prevArrow': {
          opacity: 1,
        },
        '& .slick-disabled': {
          opacity: 0,
        },
      },

      '& $nextArrow, & $prevArrow': {
        background: 'rgba(0,0,0,.2)',
        height: '100%',
        opacity: 0,
        transition: theme.transitions.create(['all'], {
          duration: theme.transitions.duration.complex,
        }),
        width: 30,
        zIndex: 1,

        '&:hover': {
          background: 'rgba(0,0,0,.9)',
        },

        '&::before': {
          fontFamily: 'FontAwesome',
          fontSize: 30,
          left: '50%',
          position: 'absolute',
          top: '50%',
          transform: 'translate(-50%,-50%)',
        },
      },
    },

    nextArrow: {
      right: 0,

      '&::before': {
        content: '"\\f105"',
      },
    },

    prevArrow: {
      left: 0,

      '&::before': {
        content: '"\\f104"',
      },
    },
  }),
  { name: 'slideList' },
);
