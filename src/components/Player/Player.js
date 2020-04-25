import React, { useRef } from "react";
import "./player.scss";
import { useSelector, useDispatch } from "react-redux";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import { onSoundPause, onSoundPlay } from "../../redux/actions/playerActions";
const options = {
  showReload: false,
  showLyric: false,
  showPlayMode: false,
  showDownload: false,
  showDestroy: false,
  spaceBar: true,
  glassBg: true,
  remember: true
};
function Player() {
  const playerState = useSelector(state => state.playerReducer);
  const playerRef = useRef();
  const dispatch = useDispatch();
  const { activeSound } = playerState;

  const tracks = [
    {
      cover: activeSound.artist && activeSound.artist.picture_medium,
      name: activeSound.title,
      singer: activeSound.artist && activeSound.artist.name,
      musicSrc: activeSound.preview
    }
  ];

  const controlOnPlay = () => {
    dispatch(onSoundPlay());
  };

  const controlOnPause = () => {
    dispatch(onSoundPause());
  };

  console.log("Player is playing?", playerState.isPlaying);

  return (
    <div>
      <ReactJkMusicPlayer
        {...options}
        autoHiddenCover={true}
        onAudioPlay={() => controlOnPlay()}
        onAudioPause={() => controlOnPause()}
        ref={player => console.log(player)}
        mode="full"
        audioLists={tracks}
      />
    </div>
  );
}

export default Player;
