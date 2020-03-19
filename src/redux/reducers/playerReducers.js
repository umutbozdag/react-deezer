import * as actionTypes from "../actions/actionTypes";
const initialState = {
  activeSound: {},
  isPlaying: false
};

export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PLAY_SOUND:
      return {
        ...state,
        isPlaying: action.payload
      };
    case actionTypes.SET_ACTIVE_SOUND:
      return {
        ...state,
        activeSound: action.payload
      };
    case actionTypes.PAUSE_SOUND:
      return {
        ...state,
        isPlaying: action.payload
      };

    default:
      return state;
  }
};
