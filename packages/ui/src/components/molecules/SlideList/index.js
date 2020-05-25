import React from 'react';
import { IntlProvider } from 'react-intl';
import Slider from 'react-slick';
import { useTheme } from '@material-ui/core/styles';

// import { propTypes } from './propTypes';
import SlideCard from '../SlideCard';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import useStyles from './styles';

const SlideList = ({ items }) => {
  const theme = useTheme();

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    swipeToSlide: false,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          dots: false,
          swipeToSlide: true,
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          dots: false,
          swipeToSlide: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider {...settings}>
        {items.map(item => (
          <IntlProvider key={item.id} locale={navigator.language}>
            <SlideCard item={item} />
          </IntlProvider>
        ))}
      </Slider>
    </div>
  );
};

// SlideList.propTypes = propTypes;

export default SlideList;
