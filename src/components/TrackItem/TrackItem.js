import React from "react";
import "./track-item.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  playTracks,
  isPlaying,
  pauseAudio,
  playAudio
} from "../../services/deezer-player";
import { useState } from "react";

export default function TrackItem(props) {
  const activeSound = useSelector(state => state.playerReducer.activeSound);
  const dispatch = useDispatch();
  const [iconName, setIconName] = useState("play-outline");
  const setIconById = id => {};

  const deneme = track => {
    dispatch({ type: "SET_ACTIVE_SOUND", payload: track });
    playTracks([track.id]);

    if (window.DZ.player.isPlaying()) {
      window.DZ.player.pause();
    } else {
      window.DZ.player.play();
    }
    // if (window.DZ.player.getCurrentIndex() == null) {
    //   playTracks([track.id]);
    // } else if (
    //   !window.DZ.player.isPlaying() &&
    //   window.DZ.player.getCurrentIndex() != null
    // ) {
    //   playAudio();
    // } else if (
    //   window.DZ.player.isPlaying() &&
    //   window.DZ.player.getCurrentIndex() != null
    // ) {
    //   pauseAudio();
    // }
  };
  return (
    <div className="track">
      <div className="track__container">
        <div className="track__artist__info">
          <div className="track__artist__pic">
            <img src={props.track.artist.picture_small} alt="" />
          </div>
          <div className="track__artist__more">
            <p className="track__name">{props.track.title}</p>
            <p className="track__artist__name">{props.track.artist.name}</p>
          </div>
        </div>
        <p className="track__position">{props.track.track_position}</p>

        <p className="track__duration">
          0{(props.track.duration / 60).toFixed(2)}
        </p>
        <ion-icon
          role="button"
          onClick={() => deneme(props.track)}
          name={props.iconName}
        ></ion-icon>

        <ion-icon name="heart-outline"></ion-icon>
      </div>
    </div>
  );
}
