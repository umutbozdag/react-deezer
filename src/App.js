import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Discover from "./components/Discover";
import Nav from "./components/Nav";
import "./app.scss";
import Genres from "./components/Genres";
import Browse from "./components/Browse/Browse";
import PlaylistDetail from "./components/PlaylistDetail";
import { initDeezer, deezerLoginStatus } from "./services/deezer";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    initDeezer();
  }, []);

  const deezerLogin = () => {
    window.DZ.login(
      function(response) {
        if (response.authResponse) {
          console.log("Welcome!  Fetching your information.... ");
          window.DZ.api("/user/me", function(response) {
            console.log("Good to see you, " + response.name + ".");
            console.log(response);
            setUser(response);
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
            {/* TODO: SEND USER PROPS TO OTHER COMPONENTS */}
            <Route
              exact
              path="/"
              render={props => <Discover {...props} user={user} />}
            />
            <Route exact path="/genres" component={Genres} />
            <Route path="/browse" component={Browse} />
            <Route path="/playlist/:id/tracks" component={PlaylistDetail} />
            <Route exact path="/playlist/:id" component={PlaylistDetail} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
