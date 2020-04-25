import React from "react";
import "./top-tracks.scss";
import TrackItem from "../TrackItem/TrackItem";

export default function TopTracks(props) {
  return (
    <div className="top__tracks">
      <h3 className="top__tracks__title">Top tracks</h3>
      <div className="top__tracks__container">
        {props.tracks &&
          props.tracks.map(track => <TrackItem track={track} key={track.id} />)}
      </div>
    </div>
  );
}
