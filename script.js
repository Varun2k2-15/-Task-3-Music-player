const audio = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const seekBar = document.getElementById("seekBar");
const fileInput = document.getElementById("fileInput");

// Play and Pause
playBtn.onclick = () => audio.play();
pauseBtn.onclick = () => audio.pause();

// Seekbar Update
audio.addEventListener("timeupdate", () => {
  seekBar.value = (audio.currentTime / audio.duration) * 100 || 0;
});

seekBar.addEventListener("input", () => {
  audio.currentTime = (seekBar.value / 100) * audio.duration;
});

// Load custom song
fileInput.addEventListener("change", function () {
  const files = this.files;
  if (files.length > 0) {
    const song = URL.createObjectURL(files[0]);
    audio.src = song;
    audio.load();
    audio.play();
  }
});
