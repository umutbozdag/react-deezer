import React from "react";
import "./top-playlists.scss";
import TopPlaylistItem from "./TopPlaylistItem";

export default function TopPlaylists(props) {
  return (
    <div className="top__playlists">
      <div className="top__playlists__container">
        <h3 className="top__playlists__title">Top Playlists</h3>

        {props.playlists &&
          props.playlists.map(playlist => (
            <TopPlaylistItem
              tracklists={props.tracklists}
              playlist={playlist}
              key={playlist.id}
            />
          ))}
      </div>
    </div>
  );
}
