import * as actionTypes from "./actionTypes";

export function onSoundPlay() {
  return {
    type: actionTypes.ON_SOUND_PLAY,
    payload: true
  };
}

export function onSoundPause() {
  return {
    type: actionTypes.ON_SOUND_PAUSE,
    payload: false
  };
}

export function setActiveSound(sound) {
  return {
    type: actionTypes.SET_ACTIVE_SOUND,
    payload: sound
  };
}

export function setPlaylist(playlist) {
  // Array
  return {
    type: actionTypes.SET_PLAYLIST,
    payload: playlist
  };
}
