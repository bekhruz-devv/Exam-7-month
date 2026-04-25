const openModal = document.getElementById("openModal");
const videoOverlay = document.getElementById("videoOverlay");
const videoPlayer = document.getElementById("videoPlayer");
const closeX = document.getElementById("closeX");

function initVideoPlayer() {
  const videoOverlay = document.getElementById("videoOverlay");
  const videoPlayer = document.getElementById("videoPlayer");
  const closeX = document.getElementById("closeX");

  const playButtons = document.querySelectorAll(".play-btn");

  playButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const videoID = button.getAttribute("data-video");

      videoPlayer.src = `https://www.youtube.com/embed/${videoID}?autoplay=1`;
      videoOverlay.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
  });

  const closeVideo = () => {
    videoPlayer.src = "";
    videoOverlay.classList.add("hidden");
    document.body.style.overflow = "auto";
  };

  videoOverlay.addEventListener("click", (e) => {
    if (e.target === videoOverlay) closeVideo();
  });

  closeX.addEventListener("click", closeVideo);
}

initVideoPlayer();
