import React from "react";
import "./top-tracks.scss";
import TrackItem from "../TrackItem/TrackItem";
import { useState } from "react";

export default function TopTracks(props) {
  const [iconName, setIconName] = useState("play-outline");

  window.DZ &&
    window.DZ.Event.subscribe("player_play", function(evt_name) {
      console.log("Player is playing", evt_name);
      setIconName("pause-outline");
    });
  window.DZ &&
    window.DZ.Event.subscribe("player_paused", function(evt_name) {
      console.log("Player is paused");
      setIconName("play-outline");
    });
  return (
    <div className="top__tracks">
      <h3 className="top__tracks__title">Top tracks</h3>
      <div className="top__tracks__container">
        {props.tracks &&
          props.tracks.map(track => (
            <TrackItem iconName={iconName} track={track} key={track.id} />
          ))}
      </div>
    </div>
  );
}
