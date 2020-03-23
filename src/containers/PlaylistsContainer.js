import React, { useEffect } from "react";
import { getTopPlaylists } from "../redux/actions/apiActions";
import { useDispatch, useSelector } from "react-redux";
import Playlists from "../components/Playlists";
import { useState } from "react";
import Axios from "axios";

export default function PlaylistsContainer(props) {
  const [topPlaylistTracks, setTopPlaylistTracks] = useState([]);
  useEffect(() => {
    Axios.get(
      `https://cors-anywhere.herokuapp.com/${props.playlist.tracklist}`
    ).then(result => {
      setTopPlaylistTracks(result.data.data);
      console.log(result);
    });
  }, []);
  const dispatch = useDispatch();
  const playlists = useSelector(
    state =>
      state.playlistsReducer.playlists.data &&
      state.playlistsReducer.playlists.data.data
  );
  const isPendingState = useSelector(state => state.playlistsReducer.pending);

  useEffect(() => {
    dispatch(getTopPlaylists());
  }, []);

  console.log(playlists);
  console.log(isPendingState);
  return (
    <div>
      <Playlists
        tracklists={topPlaylistTracks}
        shape={props.shape}
        playlists={playlists}
        isPending={isPendingState}
      />
    </div>
  );
}
