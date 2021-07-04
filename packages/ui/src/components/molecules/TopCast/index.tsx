import React from 'react';
import { Link } from 'react-router-dom';

import { Cast } from '@atoms/index';

import useStyles from './styles';
import { Cast_Credit } from '@typesRoots/movie';

interface Props {
  cast: Cast_Credit[];
  fullLink: string;
}

const TopCast: React.FC<Props> = ({ cast, fullLink }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.castWrapper}>
        {cast.map((person) => (
          <Cast cast={person} type='top' />
        ))}
      </div>

      <Link className={classes.fullCaCrBtn} to={fullLink}>
        Full Cast & Crew
      </Link>
    </div>
  );
};

export default TopCast;
