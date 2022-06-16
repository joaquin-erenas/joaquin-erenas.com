const video = document.getElementById('main-video') as HTMLVideoElement;
video.addEventListener('ended', () => {
  video.currentTime = 0.05;
  video.play();
});