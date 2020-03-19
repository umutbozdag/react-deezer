import React, { useEffect } from "react";
import "./player.scss";
import { useSelector, useDispatch } from "react-redux";
import ReactJkMusicPlayer from "react-jinke-music-player";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";

export default function Player() {
  const activeSound = useSelector(state => state.playerReducer.activeSound);
  console.log(activeSound);

  return (
    <div className="player">
      <AudioPlayer
        autoPlay
        src={activeSound.preview}
        onPlay={e => console.log("onPlay")}
        // other props here
      />
    </div>
  );
}
