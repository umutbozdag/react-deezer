import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
import Search from "../Search";
import { deezerLogout } from "../../services/deezer";

export default function Nav(props) {
  const [user, setUser] = useState({});
  const [message, setMessage] = useState("");

  const handleOnClick = e => {
    console.log(e);
    if (e.target.name == "buttonLogin") {
      props.deezerLogin();

      // setUser()
    } else {
      deezerLogout();
      localStorage.removeItem("user");
      window.location.reload();
    }
  };

  return (
    <div className="nav">
      <div className="nav__container">
        <ul className="nav__items">
          <li className="nav__item">
            <Link className="nav__link nav__link--big" to="/">
              <span>Home</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/browse">
              <span>Browse</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className="nav__link"
              to={{ pathname: "/genres", state: { user: user } }}
            >
              <span>Genres</span>
            </Link>
          </li>
          <li className="nav__item nav__search">
            <Search />
          </li>
          <li className="nav__item">
            {localStorage.getItem("user") === null ? (
              <button
                className="nav__button"
                name="buttonLogin"
                onClick={handleOnClick}
              >
                Login
              </button>
            ) : (
              <button
                className="nav__button"
                name="buttonLogout"
                onClick={handleOnClick}
              >
                Logout
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
