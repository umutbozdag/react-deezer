import React, { useEffect } from "react";
import { getTopPlaylists } from "../redux/actions/apiActions";
import { useDispatch, useSelector } from "react-redux";
import TopPlaylists from "../components/TopPlaylists/TopPlaylists";

export default function TopPlaylistsContainer(props) {
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
      <TopPlaylists
        count={props.count}
        marginLeft={props.marginLeft}
        playlists={playlists}
        isPending={isPendingState}
      />
    </div>
  );
}
