import React from "react";
import "./track-item.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function TrackItem(props) {
  const player = useSelector(state => state.playerReducer);
  console.log(player.isPlaying);
  const dispatch = useDispatch();

  const [icon, setIcon] = useState("play-circle-outline");
  const setTrack = track => {
    dispatch({ type: "SET_ACTIVE_SOUND", payload: track });
    if (player.isPlaying) {
      setIcon("pause-circle-outline");
    } else {
      setIcon("play-circle-outline");
    }
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
          onClick={() => setTrack(props.track)}
          name={icon}
        ></ion-icon>

        <ion-icon name="heart-outline"></ion-icon>
      </div>
    </div>
  );
}
