import { useContext, useState, useEffect } from 'react';
import { firebase } from '@movies/firebase';

import FirebaseAuthContext from '../contexts/FirebaseAuthContext';
import { Movie } from '../../types/movie';

const useWatchList = (movie: Movie) => {
  const { authUser, user } = useContext(FirebaseAuthContext);
  const [watchlist, setWatchlist] = useState(false);
  const userRef = firebase.db.ref(`users/${user?.uid}`);

  const toggleMovie = () => {
    if (user.watchlist && user.watchlist[movie.id]) {
      userRef.child(`watchlist/${movie.id}`).remove();
    } else {
      userRef.child(`watchlist/${movie.id}`).update(movie);
    }
  };

  useEffect(() => {
    setWatchlist(user && user.watchlist && user.watchlist[movie.id]);
  }, [authUser, user]);

  return { authUser, watchlist, toggleMovie };
};

export default useWatchList;
