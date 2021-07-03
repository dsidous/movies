import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

import { Button } from '@material-ui/core';
import Movie from '@material-ui/icons/Movie';

import useStyles from './styles';
import 'react-modal-video/css/modal-video.min.css';

interface Props {
  video: {
    key: string;
  }
}

const PlayTrailer: React.FC<Props> = ({ video: { key } }) => {
  const classes = useStyles();
  const [isOpen, setIsopen] = useState(false);

  const openModal = () => {
    setIsopen(true);
  };

  return (
    <div className={classes.root}>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={key}
        onClose={() => setIsopen(false)}
      />
      <Button
        className={classes.playButton}
        onClick={openModal}
        size="small"
        startIcon={<Movie />}
        variant="contained"
      >
        Watch Trailer
      </Button>
    </div>
  );
};

export default PlayTrailer;
