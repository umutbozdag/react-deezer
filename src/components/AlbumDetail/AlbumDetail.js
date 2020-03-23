import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/url";
import TrackItem from "../TrackItem/TrackItem";
import { Link } from "react-router-dom";

export default function AlbumDetail(props) {
  const [albumDetail, setAlbumDetail] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/album/${props.match.params.id}`).then(result => {
      setAlbumDetail(result.data);
      console.log(result);
      console.log(albumDetail);
    });
  }, []);

  return (
    <div>
      <h1>Album Detail of {props.match.params.id}</h1>

      <h2>Album tracks</h2>
      <h3>{albumDetail.title}</h3>
      <img src={albumDetail.cover_big} alt="" />

      <h4>Genres</h4>
      {albumDetail.genres &&
        albumDetail.genres.data.map(genre => (
          <Link to={`/genre/${genre.id}`}>{genre.name}</Link>
        ))}
      {albumDetail.tracks &&
        albumDetail.tracks.data.map(track => (
          <TrackItem track={track} key={track.id} />
        ))}
    </div>
  );
}
