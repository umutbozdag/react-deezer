import React from "react";
import "./album-item.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

export default function AlbumItem(props) {
  return (
    <div className="album">
      <div className="album__container">
        <div className="album__content">
          <Link to={`/album/${props.album.id}`}>
            <LazyLoadImage
              className="album__cover"
              alt=""
              src={props.album.cover_medium}
            />
            <h4 className="album__title">{props.album.title}</h4>
          </Link>

          <Link to={`/artist/${props.album.artist.id}`}>
            <div className="album__artist">
              <LazyLoadImage
                className="album__artist__pic"
                alt=""
                src={props.album.artist.picture_small}
              />
              <p className="album__artist__name">{props.album.artist.name}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
