import * as actionTypes from "./actionTypes";
import axios from "axios";
import { API_URL } from "../../utils/url";

export function getTopPlaylistsSuccess(playlists) {
  return {
    type: actionTypes.GET_TOP_PLAYLISTS_SUCCESS,
    payload: playlists
  };
}

export function getTopPlaylistsPending() {
  return {
    type: actionTypes.GET_TOP_PLAYLISTS_PENDING
  };
}

export function getTopPlaylists(count) {
  return function(dispatch) {
    dispatch(getTopPlaylistsPending());
    axios
      .get(`${API_URL}/chart/0/playlists&limit=${count}`)
      .then(result => dispatch(getTopPlaylistsSuccess(result)));
  };
}

export function getTopAlbumsSuccess(albums) {
  return { type: actionTypes.GET_TOP_ALBUMS_SUCCESS, payload: albums };
}

export function getTopAlbumsPending() {
  return { type: actionTypes.GET_TOP_ALBUMS_PENDING };
}

export function getTopAlbums() {
  return function(dispatch) {
    dispatch(getTopAlbumsPending);
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/http://api.deezer.com/chart/0/albums&limit=20"
      )
      .then(result => {
        dispatch(getTopAlbumsSuccess(result));
      });
  };
}

export function getTopTracksSuccess(tracks) {
  return { type: actionTypes.GET_TOP_TRACKS_SUCCESS, payload: tracks };
}

export function getTopTracks() {
  return function(dispatch) {
    axios.get(`${API_URL}/chart/0/tracks&limit=20`).then(result => {
      dispatch(getTopTracksSuccess(result));
    });
  };
}
