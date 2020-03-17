import React, { useState, useEffect } from "react";
import axios from "axios";
import AlbumItem from "./AlbumItem";
import "./albums.scss";

export default function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/http://api.deezer.com//chart/0/albums&limit=50"
      )
      .then(result => {
        console.log(result);
        setAlbums(result.data.data);
      });
  }, []);

  return (
    <div className="albums">
      <h1 className="albums__title">Trending Albums</h1>

      <div className="albums__container">
        {albums &&
          albums.map(album => <AlbumItem album={album} key={album.id} />)}
      </div>
    </div>
  );
}
