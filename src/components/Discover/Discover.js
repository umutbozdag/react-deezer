import React, { useState, useEffect } from "react";
import "./discover.scss";
import { getUser } from "../../services/deezer";
import Player from "../Player/Player";
import PlaylistsContainer from "../../containers/PlaylistsContainer";
import AlbumsContainer from "../../containers/AlbumsContainer";
import AppHeader from "../AppHeader/AppHeader";
import ScrollMenu from "react-horizontal-scrolling-menu";
import TopTracks from "../TopTracks/TopTracks";
import TopPlaylists from "../TopPlaylists/TopPlaylists";
import TopPlaylistsContainer from "../../containers/TopPlaylistsContainer";
import TopTracksContainer from "../../containers/TopTracksContainer";

export default function Discover(props) {
  const [user, setUser] = useState({});

  const deezerLogin = () => {
    window.DZ.login(
      function(response) {
        console.log(`Auth response: ${JSON.stringify(response.authResponse)}`);
        if (response.authResponse) {
          console.log("Welcome!  Fetching your information.... ");
          window.DZ.api("/user/me", function(response) {
            localStorage.setItem("user", JSON.stringify(response));
            // window.location.reload();
          });
        } else {
          console.log("User cancelled login or did not fully authorize.");
          // localStorage.removeItem("user");
        }
      },
      { perms: "basic_access,email,listening_history" }
    );
  };
  useEffect(() => {
    const user = getUser();
    setUser(user);
    console.log(user);
  }, []);

  return (
    <div>
      <AppHeader deezerLogin={deezerLogin} />
      <div className="discover">
        <div className="discover__container">
          <div className="discover__content"></div>
        </div>
        <div className="discover__trendings">
          <div className="discover__playlists">
            {/* <PlaylistsContainer /> */}
          </div>
          <AlbumsContainer />
          <div className="discover__tops">
            <TopTracksContainer />
            <div className="discover__top__playlists__container">
              <TopPlaylistsContainer count={10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
