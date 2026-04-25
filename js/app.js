const openModal = document.getElementById("openModal");
const videoOverlay = document.getElementById("videoOverlay");
const videoPlayer = document.getElementById("videoPlayer");
const closeX = document.getElementById("closeX");
const track = document.getElementById("track");
const cards = track.querySelectorAll(".w-\\[400px\\]");
let current = 0;
const total = cards.length;

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

function goTo(i) {
  current = Math.max(0, Math.min(i, total - 2));
  track.style.transform = "translateX(-" + current * (400 + 24) + "px)";
}

document.getElementById("prev").onclick = function () {
  goTo(current - 1);
};
document.getElementById("next").onclick = function () {
  goTo(current + 1);
};

setInterval(function () {
  goTo(current + 1);
}, 3000);

setInterval(function () {
  if (current >= total - 2) {
    goTo(0);
  } else {
    goTo(current + 1);
  }
}, 3000);

let isDragging = false,
  startX = 0,
  dragDelta = 0;

track.addEventListener("mousedown", function (e) {
  isDragging = true;
  startX = e.clientX;
  dragDelta = 0;
});
document.addEventListener("mousemove", function (e) {
  if (!isDragging) return;
  dragDelta = e.clientX - startX;
  track.style.transform = "translateX(-" + (current * 424 - dragDelta) + "px)";
});
document.addEventListener("mouseup", function () {
  if (!isDragging) return;
  isDragging = false;
  if (dragDelta < -80) goTo(current + 1);
  else if (dragDelta > 80) goTo(current - 1);
  else goTo(current);
});
