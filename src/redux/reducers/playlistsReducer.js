import * as actionTypes from "../actions/actionTypes";

const initialState = {
  playlists: []
};

export function playlistsReducer(state = initialState.playlists, action) {
  switch (action.type) {
    case actionTypes.GET_TOP_PLAYLISTS_SUCCESS:
      return {
        ...state,
        playlists: action.payload
      };
    default:
      return state;
  }
}
