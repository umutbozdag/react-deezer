import React, { useEffect, useState } from "react";
import axios from "axios";
import "./playlists.scss";
import { API_URL } from "../../utils/url";
import PlaylistItem from "./PlaylistItem";
import Loading from "../Loading";
import { useDispatch, useSelector } from "react-redux";
import { getTopPlaylists } from "../../redux/actions/apiActions";

export default function Playlists(props) {
  // const [playlists, setPlaylists] = useState([]);

  const dispatch = useDispatch();
  const playlists = useSelector(
    state =>
      state.playlistsReducer.playlists &&
      state.playlistsReducer.playlists.data.data
  );
  console.log(playlists);

  useEffect(() => {
    dispatch(getTopPlaylists());
  }, []);

  return (
    <div className="playlists">
      <div className="playlists__container">
        {playlists &&
          playlists.map(playlist => (
            <PlaylistItem playlist={playlist} key={playlist.id} />
          ))}
      </div>
    </div>
  );
}
