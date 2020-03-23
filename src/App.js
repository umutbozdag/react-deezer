import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Discover from "./components/Discover";
import Nav from "./components/Nav";
import "./app.scss";
import Genres from "./components/Genres";
import Browse from "./components/Browse/Browse";
import PlaylistDetail from "./components/PlaylistDetail";
import { initDeezer } from "./services/deezer";
import AlbumDetail from "./components/AlbumDetail/AlbumDetail";
import ArtistDetail from "./components/ArtistDetail/ArtistDetail";
import Player from "./components/Player/Player";
import Genre from "./components/Genre/Genre";

function App() {
  useEffect(() => {
    initDeezer();
  }, []);

  return (
    <div className="app">
      <div className="app__container">
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Discover} />
            <Route
              exact
              path="/genres"
              render={props => <Genres {...props} />}
            />
            font-size: 14px;
            <Route path="/browse" component={Browse} />
            <Route exact path="/playlist/:id" component={PlaylistDetail} />
            <Route
              exact
              path="/album/:id"
              render={props => <AlbumDetail {...props} />}
            />
            <Route exact path="/artist/:id" component={ArtistDetail} />
            <Route exact path="/genre/:id" component={Genre} />
          </Switch>
          <Player />
        </Router>
      </div>
    </div>
  );
}

export default App;
