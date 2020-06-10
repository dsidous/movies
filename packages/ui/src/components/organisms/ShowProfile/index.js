import React from 'react';
import { Box } from '@material-ui/core';

import { propTypes } from './propTypes';
import Section from '../../atoms/Section';
import PlayTrailer from '../../atoms/PlayTrailer';
import TopCast from '../../molecules/TopCast';
import Crew from '../../atoms/Crew';
import FullScreenBackdrop from '../../atoms/FullScreenBackdrop';
import Reviews from '../../molecules/Reviews';
import SEO from '../../atoms/SEO';
import WatchlistBookmark from '../../atoms/WatchlistBookmark';
import LastSeason from '../../molecules/LastSeason';
import SlideList from '../../molecules/SlideList';
import useStyles from './styles';
import useConfig from '../../hooks/useConfig';

const ShowProfile = ({
  show: {
    id,
    backdrop_path,
    poster_path,
    genres,
    name,
    title,
    release_date,
    first_air_date,
    reviews,
    runtime,
    vote_average,
    tagline,
    overview,
    images: { backdrops },
    videos,
    similar,
    credits: { cast, crew },
    seasons,
  },
  dcolor,
  show,
}) => {
  const { getImageURL } = useConfig();
  const showDate = first_air_date || release_date;
  const showTitle = title || name;
  let lastSeason = null;

  if (seasons) {
    [lastSeason] = seasons.sort((a, b) => b.season_number - a.season_number);
  }

  const posterURL = getImageURL({
    filePath: poster_path,
    mediaType: 'poster',
    size: 3,
  });

  const backdropURL = getImageURL({
    filePath: backdrop_path,
    mediaType: 'backdrop',
    size: 1,
  });

  const backdropsURL = backdrops.map(image =>
    getImageURL({
      filePath: image.file_path,
      mediaType: 'backdrop',
      size: 1,
    }),
  );

  const video = videos
    ? videos.filter(element => element.type === 'Trailer')[0]
    : [];

  const genres_html = genres.map(genre => <li key={genre.id}>{genre.name}</li>);

  const classes = useStyles({
    dcolor,
    backdropURL,
  });

  return (
    <div>
      <SEO title={showTitle} />
      <Box className={classes.backdrops}>
        {backdrops[0] && <FullScreenBackdrop backdrops={backdropsURL} />}
      </Box>

      <div className={classes.header}>
        <div className={classes.headerInner}>
          <div className={classes.poster}>
            <img src={posterURL} alt="poster" />
            <WatchlistBookmark movie={show} />
          </div>
          <div className={classes.data}>
            <h1 className={classes.title}>
              {showTitle}
              <span className={classes.rating}>{vote_average}</span>
            </h1>

            <ul className={classes.titleTags}>
              <li>{showDate.slice(0, 4)}</li>
              {runtime && <li>{`${runtime} min`}</li>}
              <li>
                <ul className={classes.genres}>{genres_html}</ul>
              </li>
            </ul>

            <h4 className={classes.tagline}>{tagline}</h4>
          </div>

          <div className={classes.overview}>
            <h4>Overview</h4>
            {overview}
          </div>

          {video && <PlayTrailer video={video} />}

          {crew[0] && <Crew crew={crew} />}
        </div>
      </div>

      {cast[0] && (
        <Section noborder>
          <Section.Header>Top Billed Cast</Section.Header>
          <TopCast cast={cast.slice(0, 6)} fullLink={`${id}/crew`} />
        </Section>
      )}

      {lastSeason && (
        <Section>
          <Section.Header>Last Season</Section.Header>
          <LastSeason tvId={id} season={lastSeason} />
        </Section>
      )}

      {reviews && reviews[0] && (
        <Section>
          <Section.Header>Reviews</Section.Header>
          <Reviews reviews={reviews} />
        </Section>
      )}

      {similar.results[0] && (
        <Section>
          <Section.Header>
            {`People who liked ${showTitle} also liked`}
          </Section.Header>
          <SlideList items={similar.results} />
        </Section>
      )}
    </div>
  );
};

ShowProfile.propTypes = propTypes;

export default ShowProfile;
