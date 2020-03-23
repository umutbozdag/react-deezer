import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTopTracks } from "../redux/actions/apiActions";
import TopTracks from "../components/TopTracks/TopTracks";

export default function TopTracksContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopTracks());
  }, []);

  const tracks = useSelector(
    state =>
      state.topTracksReducer.topTracks.data &&
      state.topTracksReducer.topTracks.data.data
  );
  console.log(tracks);
  return <TopTracks tracks={tracks} />;
}
