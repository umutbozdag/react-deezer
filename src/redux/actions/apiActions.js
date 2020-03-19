import * as actionTypes from "./actionTypes";
import axios from "axios";
import { API_URL } from "../../utils/url";

export function getTopPlaylistsSuccess(playlists) {
  return {
    type: actionTypes.GET_TOP_PLAYLISTS_SUCCESS,
    payload: playlists
  };
}

export function getTopPlaylistsPending(params) {
  return {
    type: actionTypes.GET_TOP_PLAYLISTS_PENDING
  };
}

export function getTopPlaylists() {
  return function(dispatch) {
    dispatch(getTopPlaylistsPending());
    axios
      .get(`${API_URL}/chart/0/playlists&limit=3`)
      .then(result => dispatch(getTopPlaylistsSuccess(result)));
  };
}
