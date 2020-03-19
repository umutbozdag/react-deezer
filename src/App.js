import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Discover from "./components/Discover";
import Nav from "./components/Nav";
import "./app.scss";
import Genres from "./components/Genres";
import Browse from "./components/Browse/Browse";
import PlaylistDetail from "./components/PlaylistDetail";
import { initDeezer, deezerLoginStatus, getUser } from "./services/deezer";
import AlbumDetail from "./components/AlbumDetail/AlbumDetail";
import ArtistDetail from "./components/ArtistDetail/ArtistDetail";
import Player from "./components/Player/Player";

function App() {
  useEffect(() => {
    initDeezer();
  }, []);

  const deezerLogin = () => {
    window.DZ.login(
      function(response) {
        if (response.authResponse) {
          console.log("Welcome!  Fetching your information.... ");
          window.DZ.api("/user/me", function(response) {
            localStorage.setItem("user", JSON.stringify(response));
            window.location.reload();
          });
        } else {
          console.log("User cancelled login or did not fully authorize.");
        }
      },
      { perms: "basic_access,email,listening_history" }
    );
  };

  return (
    <div className="app">
      <div className="app__container">
        <Router>
          <Nav deezerLogin={deezerLogin} />

          <Switch>
            <Route exact path="/" render={props => <Discover {...props} />} />
            <Route
              exact
              path="/genres"
              render={props => <Genres {...props} />}
            />
            font-size: 14px;
            <Route path="/browse" render={props => <Browse {...props} />} />
            <Route exact path="/playlist/:id" component={PlaylistDetail} />
            <Route
              exact
              path="/album/:id"
              render={props => <AlbumDetail {...props} />}
            />
            <Route exact path="/artist/:id" component={ArtistDetail} />
          </Switch>
          <Player />
        </Router>
      </div>
    </div>
  );
}

export default App;
