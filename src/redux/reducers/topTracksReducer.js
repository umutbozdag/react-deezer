import * as actionTypes from "../actions/actionTypes";

const initialState = {
  topTracks: []
};

export const topTracksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TOP_TRACKS_SUCCESS:
      return {
        ...state,
        topTracks: action.payload
      };

    default:
      return state;
  }
};
