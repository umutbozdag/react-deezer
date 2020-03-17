import React, { useState, useEffect } from "react";
import "./discover.scss";
import Albums from "../Albums";
import Playlists from "../Playlists";

export default function Discover(props) {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    const user = localStorage.getItem("user");
    setUser(JSON.parse(user));
    console.log(user);
  };

  return (
    <div className="discover">
      <div className="discover__container">
        <div className="discover__content">
          <h1 className="discover__title">
            {user ? `Hello ${user.name}` : "Discover"}
          </h1>
          <p className="discover__desc">
            Explore music, entertainment and podcast Channels <br /> The music
            you want. Anywhere, anytime.
          </p>
          <button className="discover__button">Explore Deezer Top</button>
        </div>
      </div>
      <div className="discover__trendings">
        <div className="discover__playlists">
          <Playlists count={4} />
        </div>
        <Albums />
      </div>
    </div>
  );
}
