import { combineReducers } from "redux";
import { playerReducer } from "./playerReducer";
import { playlistsReducer } from "./playlistsReducer";
import { albumsReducer } from "./albumsReducer";
import { topTracksReducer } from "./topTracksReducer";
const rootReducer = combineReducers({
  playerReducer,
  playlistsReducer,
  albumsReducer,
  topTracksReducer
});

export default rootReducer;
