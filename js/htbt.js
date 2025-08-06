document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 1024) return;

  const track = document.querySelector(".moodboard-carousel-track");
  const slides = track?.querySelectorAll("img");
  const leftArrow = document.querySelector(".carousel-arrow.left");
  const rightArrow = document.querySelector(".carousel-arrow.right");

  if (!track || slides.length === 0) return;

  let currentIndex = 0;

  function updateCarouselPosition() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateArrowVisibility();
  }

  function updateArrowVisibility() {
    leftArrow.style.display = currentIndex > 0 ? "block" : "none";
    rightArrow.style.display = currentIndex < slides.length - 1 ? "block" : "none";
  }

  leftArrow.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarouselPosition();
    }
  });

  rightArrow.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateCarouselPosition();
    }
  });

  updateCarouselPosition();
});
