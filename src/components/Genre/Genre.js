import React, { useEffect, useState } from "react";
import axios from "axios";
import genres from "../../utils/genres";
import { API_URL } from "../../utils/url";
import PlaylistItem from "../Playlists/PlaylistItem";

export default function Genre(props) {
  const currentGenre = genres.filter(
    genre => genre.id == props.match.params.id
  );
  // Getting the current genre's info i.e tracks of this genre, artists
  console.log(currentGenre);
  useEffect(() => {
    axios
      .get(`${API_URL}/playlist/${currentGenre[0].playlistId}`)
      .then(result => console.log(result));
  });
  return (
    <div>
      <h1>Genre Detail of {props.match.params.id}</h1>
      {/* <PlaylistItem playlist={playlist}/> */}
    </div>
  );
}
