import React, { useEffect } from "react";
import { getTopAlbums } from "../redux/actions/apiActions";
import { useDispatch, useSelector } from "react-redux";
import Albums from "../components/Albums/Albums";

export default function AlbumsContainer() {
  const dispatch = useDispatch();
  const albums = useSelector(
    state =>
      state.albumsReducer.albums.data && state.albumsReducer.albums.data.data
  );
  const isPending = useSelector(state => state.albumsReducer.pending);
  console.log(isPending);

  useEffect(() => {
    dispatch(getTopAlbums());
  }, []);

  return (
    <div>
      <Albums albums={albums} isPending={isPending} />
    </div>
  );
}
