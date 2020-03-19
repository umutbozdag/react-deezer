import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/url";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../redux/actions/actionTypes";

export default function AlbumDetail(props) {
  const [albumDetail, setAlbumDetail] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${API_URL}/album/${props.match.params.id}/tracks`)
      .then(result => {
        setAlbumDetail(result.data.data);
        console.log(albumDetail);
        console.log(result);
      });
  }, []);

  return (
    <div>
      <h1>Album Detail of {props.match.params.id}</h1>

      <h2>Album tracks</h2>

      {albumDetail.map(track => (
        <div>
          <div key={track.id}>
            <h1>{track.title}</h1>
            <button
              onClick={() =>
                dispatch({
                  type: actionTypes.SET_ACTIVE_SOUND,
                  payload: track
                })
              }
            >
              Set music
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
