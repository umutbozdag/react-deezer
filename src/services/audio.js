class AudioController {
  constructor() {
    this.audio = new Audio();
  }

  playAudio() {
    const { audio } = this;
    audio.play();
  }

  pauseAudio() {
    const { audio } = this;
    audio.pause();
  }

  isPlaying() {
    if (!this.audio.paused) return true;
  }

  setSoundSrc(src) {
    this.audio.src = src;
  }
}
