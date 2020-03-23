import * as actionTypes from "../actions/actionTypes";

const initialState = {
  albums: [],
  pending: false
};

export const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TOP_ALBUMS_SUCCESS:
      return {
        ...state,
        pending: false,
        albums: action.payload
      };

    case actionTypes.GET_TOP_ALBUMS_PENDING:
      return {
        ...state,
        pending: true
      };

    default:
      return state;
  }
};
