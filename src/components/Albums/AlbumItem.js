import React from "react";
import "./album-item.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

export default function AlbumItem(props) {
  const getWords = (str, count) => {
    return str
      .split(" ")
      .slice(0, count)
      .join(" ");
  };

  return (
    <div className="album">
      <div className="album__container">
        <div className="album__content">
          <Link className="album__link" to={`/album/${props.album.id}`}>
            <LazyLoadImage
              className="album__cover"
              alt=""
              src={props.album.cover_medium}
            />
            <h4 className="album__title">{getWords(props.album.title, 3)}</h4>
          </Link>

          <Link className="album__link" to={`/artist/${props.album.artist.id}`}>
            <div className="album__artist">
              <p className="album__artist__name">{props.album.artist.name}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
