import React from 'react';
import { IntlProvider } from 'react-intl';
import Slider from 'react-slick';
import { useTheme } from '@material-ui/core/styles';

import { propTypes } from './propTypes';
import SlideCard from '../SlideCard';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import useStyles from './styles';

const NextArrow = props => {
  const { className, onClick } = props;
  const classes = useStyles();

  return (
    <div
      className={[...className, classes.nextArrow].join(' ')}
      onClick={onClick}
      onKeyDown={onClick}
      role="none"
    />
  );
};

const PrevArrow = props => {
  const { className, onClick } = props;
  const classes = useStyles();

  return (
    <div
      className={[...className, classes.prevArrow].join(' ')}
      onClick={onClick}
      onKeyDown={onClick}
      role="none"
    />
  );
};

const SlideList = ({ items }) => {
  const theme = useTheme();

  const settings = {
    arrows: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    swipeToSlide: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          arrows: false,
          dots: false,
          swipeToSlide: true,
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          arrows: false,
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

SlideList.propTypes = propTypes;

export default SlideList;
