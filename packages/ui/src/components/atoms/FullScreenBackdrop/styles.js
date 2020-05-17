import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  {
    wrapper: {
      float: 'left',
    },
    image: {
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: props => props.height,
    },
  },
  { name: 'backdropSlide' },
);
