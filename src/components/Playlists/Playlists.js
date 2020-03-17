import React, { useEffect, useState } from "react";
import axios from "axios";
import "./playlists.scss";
import { API_URL } from "../../utils/url";
import PlaylistItem from "./PlaylistItem";
import Loading from "../Loading";

export default function Playlists(props) {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/chart/0/playlists&limit=${props.count}`)
      .then(result => {
        console.log(result);
        setPlaylists(result.data.data);
        setLoading(false);
      });
  }, [props.count]);

  return (
    <div className="playlists">
      {loading ? (
        <div className="loading__container">
          <Loading />
        </div>
      ) : (
        <div className="playlists__container">
          {playlists &&
            playlists.map(playlist => (
              <PlaylistItem playlist={playlist} key={playlist.id} />
            ))}
        </div>
      )}
    </div>
  );
}
