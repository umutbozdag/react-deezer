import * as actionTypes from "../actions/actionTypes";
const initialState = {
  activeSound: {},
  isPlaying: false
};

export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ON_SOUND_PLAY:
      return {
        ...state,
        isPlaying: action.payload
      };
    case actionTypes.SET_ACTIVE_SOUND:
      return {
        ...state,
        activeSound: action.payload
      };
    case actionTypes.ON_SOUND_PAUSE:
      return {
        ...state,
        isPlaying: action.payload
      };

    default:
      return state;
  }
};
