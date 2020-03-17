import React from "react";
import "./playlist-item.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function PlaylistItem(props) {
  return (
    <div className="playlist">
      <div className="playlist__container">
        <div className="playlist__content">
          <LazyLoadImage
            alt=""
            src={props.playlist.picture_xl} // use normal <img> attributes as props
            width={300}
          />
          <h3>{props.playlist.title}</h3>
        </div>
      </div>
    </div>
  );
}
