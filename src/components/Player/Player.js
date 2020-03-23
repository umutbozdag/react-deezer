import React from "react";
import "./player.scss";
import { useSelector, useDispatch } from "react-redux";
import ReactJkMusicPlayer from "react-jinke-music-player";

export default function Player() {
  const activeSound = useSelector(state => state.playerReducer.activeSound);
  console.log(activeSound);

  return (
    <div className="player">
      <h3>Current song: {activeSound.title}</h3>
      <audio src={activeSound.preview} controls></audio>
    </div>
  );
}
