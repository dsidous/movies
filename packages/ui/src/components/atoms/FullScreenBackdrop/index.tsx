import React from 'react';
import Slider from 'react-slick';

import useStyles from './styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Props {
  backdrops: string[];
}

const FullScreenBackdrop: React.FC<Props> = ({ backdrops }) => {
  const settings = {
    arrows: false,
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const classes = useStyles({ height: window.innerHeight });

  if (!backdrops) {
    return null;
  }

  return (
    <Slider {...settings}>
      {backdrops.map(backdrop => (
        <div key={backdrop} className={classes.wrapper}>
          <div
            className={classes.image}
            style={{
              backgroundImage: `url(${backdrop})`,
            }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default FullScreenBackdrop;
