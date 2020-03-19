import * as actionTypes from "./actionTypes";

export function playSound() {
  return {
    type: actionTypes.PLAY_SOUND,
    payload: true
  };
}

export function pauseSound() {
  return {
    type: actionTypes.PAUSE_SOUND,
    payload: false
  };
}

export function setActiveSound(sound) {
  return {
    type: actionTypes.SET_ACTIVE_SOUND,
    payload: sound
  };
}
