import React from "react";
import "./browse.scss";
import { Link } from "react-router-dom";

export default function Browse() {
  return (
    <div className="browse">
      <div className="browse__container">
        <div className="browse__nav">
          <div className="browse__nav__items">
            <Link className="browse__nav__item" to="/albums">
              Albums
            </Link>
            <Link className="browse__nav__item" to="/artists">
              Artists
            </Link>
            <Link className="browse__nav__item" to="/genres">
              Genres
            </Link>
            <Link className="browse__nav__item" to="/genres">
              New Releases
            </Link>
          </div>
        </div>
      </div>
      <h2>Browse</h2>
    </div>
  );
}
