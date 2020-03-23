import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
import { playTracks, playPlaylists } from "../../services/deezer-player";
import { changeTheme } from "../../utils/helpers";

export default function Nav() {
  return (
    <div className="nav">
      {/* <li className="nav__item nav__item--brand">
        <div className="brand__container">
          <img
            className="nav__brand"
            src="https://srv-file6.gofile.io/download/5Xp9re/580b57fcd9996e24bc43c51b.png"
            alt=""
          />
        </div>
      </li> */}

      <div className="nav__container">
        <ul className="nav__items">
          <h3 className="nav__title">Discover</h3>

          <li className="nav__item">
            <Link className="nav__link" to="/">
              <ion-icon name="home-outline"></ion-icon> <span>Home</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/browse">
              <ion-icon name="compass-outline"></ion-icon> <span>Browse</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link">
              <ion-icon name="radio-outline"></ion-icon> <span>Radio</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/favorites">
              <ion-icon name="heart-outline"></ion-icon>
              <span>Favorites</span>
            </Link>
          </li>

          <h3 className="nav__title">Your library</h3>
          {/* <li className="nav__item">
            <Link className="nav__link" to="/genres">
              <i class="fas fa-record-vinyl nav__icon"></i>
              <span>Genres</span>
            </Link>
          </li> */}

          <li className="nav__item">
            <Link className="nav__link">
              <ion-icon name="person-outline"></ion-icon>
              <span>Artists</span>
            </Link>
          </li>

          <li className="nav__item">
            <Link className="nav__link">
              <ion-icon name="musical-notes-outline"></ion-icon>
              <span>Songs</span>
            </Link>
          </li>

          <li className="nav__item">
            <Link className="nav__link">
              <ion-icon name="albums-outline"></ion-icon> <span>Album</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
