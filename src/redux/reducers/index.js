import { combineReducers } from "redux";
import { playerReducer } from "./playerReducer";
import { playlistsReducer } from "./playlistsReducer";

const rootReducer = combineReducers({
  playerReducer,
  playlistsReducer
});

export default rootReducer;
