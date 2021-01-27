/** @jsxFrag React.Fragment */
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import BookmarkSharpIcon from '@material-ui/icons/BookmarkSharp';
import BookmarkBorderSharpIcon from '@material-ui/icons/BookmarkBorderSharp';

import useSnackBars from '../../hooks/useSnackBars';
import useWatchList from '../../hooks/useWatchList';
import { propTypes } from './propTypes';

import useStyles from './styles';
import { Movie } from '../../../types/movie';
import { Tv_detailed } from '../../../types/tv';

type Show = Movie & Tv_detailed;

interface Props {
  movie: Show;
}

const WatchlistBookmark:React.FC<Props> = ({ movie }) => {
  const classes = useStyles();
  const { authUser, watchlist, toggleMovie } = useWatchList(movie);
  const { addAlert } = useSnackBars();

  const toggleWatchlist = () => {
    addAlert(
      `${movie.title || movie.name} ${
        watchlist ? 'removed from' : 'added to'
      } your watchlist`,
    );
    toggleMovie();
  };

  return (
    <>
      {authUser && (
        <IconButton
          className={classes.root}
          aria-label="bookmark"
          onClick={() => toggleWatchlist()}
        >
          {watchlist ? (
            <BookmarkSharpIcon className={classes.label} />
          ) : (
            <BookmarkBorderSharpIcon className={classes.label} />
          )}
        </IconButton>
      )}
    </>
  );
};

export default WatchlistBookmark;
