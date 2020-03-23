import React from "react";
import "./top-playlist-item.scss";
import { playPlaylist } from "../../services/deezer-player";
import { useDispatch, useSelector } from "react-redux";

export default function TopPlaylistItem(props) {
  const dispatch = useDispatch();
  const activePlaylist = useSelector(
    state => state.playlistsReducer.activePlaylist
  );

  const playTopPlaylist = playlist => {
    const iconName = "play-circle-outline";
    if (
      window.DZ.player.isPlaying() != undefined &&
      window.DZ.player.isPlaying()
    ) {
      window.DZ.player.pause();
    } else {
      dispatch({ type: "SET_PLAYLIST", payload: playlist });

      playPlaylist(playlist.id);
    }
    console.log(activePlaylist);
  };
  return (
    <div className="top__playlist">
      <div className="top__playlist__container">
        <img
          className="top__playlist__cover"
          src={props.playlist && props.playlist.picture_big}
          alt=""
        />
        <p className="top__playlist__name">{props.playlist.title}</p>
        {window.DZ.player.isPlaying() != undefined &&
        window.DZ.player.isPlaying() ? (
          <ion-icon onClick name="pause-circle-outline"></ion-icon>
        ) : (
          <ion-icon
            onClick={() => playTopPlaylist(props.playlist && props.playlist)}
            name="play-circle-outline"
          ></ion-icon>
        )}
      </div>
    </div>
  );
}
