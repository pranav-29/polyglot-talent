import React, { useState, useRef } from 'react';
import VideoFile from '../media/Video.mp4';
import ThumbnailImage from '../media/thumb.gif';
import './videoPlayer.css';
import ReactPlayer from 'react-player';
import { FaPlay } from "react-icons/fa";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  const handlePlayPause = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.getInternalPlayer().pause();
      } else {
        playerRef.current.getInternalPlayer().play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleOnPause = () => {
    setIsPlaying(false);
  };

  return (
    <div className='video'>
      <ReactPlayer
        ref={playerRef}
        controls={true}
        url={VideoFile}
        width='100%'
        height='480px'
        onPause={handleOnPause}
        config={{
          file: {
            attributes: {
              poster: ThumbnailImage,
            },
          },
        }}
      />
      {!isPlaying && (
        <div className='centered-icon' onClick={handlePlayPause}>
          <FaPlay className='PlayIcon'/>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
