import * as actionTypes from "../actions/actionTypes";

const initialState = {
  playlists: [],
  pending: false,
  activePlaylist: {}
};

export function playlistsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_TOP_PLAYLISTS_SUCCESS:
      return {
        ...state,
        playlists: action.payload,
        pending: false
      };
    case actionTypes.GET_TOP_PLAYLISTS_PENDING:
      return {
        ...state,
        pending: true
      };

    case actionTypes.SET_PLAYLIST:
      return {
        ...state,
        activePlaylist: action.payload
      };

    default:
      return state;
  }
}
