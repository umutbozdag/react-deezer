const { DZ } = window;

export const playTracks = tracks => {
  if (!Array.isArray(tracks)) {
    return `${tracks} is not an ARRAY!`;
  }
  window.DZ && window.DZ.player.playTracks(tracks);
};

export const playAlbum = albumId => {
  window.DZ && window.DZ.player.playAlbum(albumId);
};

export const playPlaylist = playlistId => {
  window.DZ && window.DZ.player.playPlaylist(playlistId);
};

export const playAudio = () => {
  window.DZ && window.DZ.player.play();
};
export const pauseAudio = () => {
  window.DZ && window.DZ.player.pause();
};
export const nextTrack = () => {
  window.DZ && window.DZ.player.next();
};
export const prevTrack = () => {
  window.DZ && window.DZ.player.prev();
};
export const seek = position => {
  // position: float 0-100
  window.DZ && window.DZ.player.seek(position);
};
export const setVolume = volume => {
  // volume: integer 0-100
  window.DZ && window.DZ.player.setVolume(volume);
};

export const mute = () => {
  window.DZ && window.DZ.player.setMute();
};

export const isPlaying = () => {
  return window.DZ && window.DZ.player.isPlaying();
};
