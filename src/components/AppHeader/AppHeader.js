import React from "react";
import Search from "../Search";
import { deezerLogout } from "../../services/deezer";
import "./app-header.scss";
import { changeTheme, getCurrentTheme } from "../../utils/helpers";

export default function AppHeader(props) {
  const toggleTheme = () => {
    changeTheme();
  };
  const handleOnClick = e => {
    console.log(e);
    if (e.target.name == "buttonLogin") {
      props.deezerLogin();
    } else {
      deezerLogout();
      localStorage.removeItem("user");
      window.location.reload();
    }
  };
  return (
    <div className="app__header">
      <div className="app__header__container">
        <div className="app__header__items">
          <div className="app__header__item">
            <Search />
          </div>
          <div className="app__header__item deneme">
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
          </div>
          {console.log(getCurrentTheme())}
          <div className="app__header__item">
            {getCurrentTheme() === "dark" ? (
              <ion-icon onClick={toggleTheme} name="sunny-outline"></ion-icon>
            ) : (
              <ion-icon onClick={toggleTheme} name="moon-outline"></ion-icon>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
