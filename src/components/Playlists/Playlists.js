import React from "react";
import "./playlists.scss";
import PlaylistItem from "./PlaylistItem";
import Loading from "../Loading";

export default function Playlists(props) {
  console.log(props);
  return (
    <div className="playlists">
      <div className="playlists__container">
        {props.isPending ? (
          <Loading />
        ) : (
          props.playlists &&
          props.playlists.map(playlist => (
            <PlaylistItem
              shape={props.shape}
              playlist={playlist}
              key={playlist.id}
            />
          ))
        )}
      </div>
    </div>
  );
}
