import React from 'react';
import Slider from 'react-slick';
import { useTheme } from '@material-ui/core/styles';

import { propTypes } from './propTypes';
import MediaImage from '../../atoms/MediaImage';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import useStyles from './styles';

const SimilarMovies = ({ similar, handleMovieClick }) => {
  const theme = useTheme();

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    swipeToSlide: false,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          arrows: false,
          swipeToSlide: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h4>Similar movies</h4>

      <div className={classes.slider}>
        <Slider {...settings}>
          {similar.map(sim => (
            <div
              key={sim.id}
              className={classes.slide}
              onClick={() => handleMovieClick(sim.id)}
              onKeyDown={() => handleMovieClick(sim.id)}
              role="link"
              tabIndex="-1"
            >
              <MediaImage
                mediaType="poster"
                size={1}
                filePath={sim.poster_path}
                name={sim.title}
              />
              <small>{sim.title}</small>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

SimilarMovies.propTypes = propTypes;

export default SimilarMovies;
