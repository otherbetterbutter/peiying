document.addEventListener('DOMContentLoaded', function () {
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const imageContainer = document.querySelector('.image-container');

    // Check if left arrow should be hidden or visible based on scroll position
    function updateLeftArrowVisibility() {
        leftArrow.style.display = imageContainer.scrollLeft === 0 ? 'none' : 'block';
    }

    // Add event listeners for scrolling
    imageContainer.addEventListener('scroll', updateLeftArrowVisibility);

    // Add event listener for right arrow click to scroll to the next image
    rightArrow.addEventListener('click', function () {
        imageContainer.scrollBy({ left: imageContainer.offsetWidth, behavior: 'smooth' });
    });

    // Add event listener for left arrow click to scroll to the previous image
    leftArrow.addEventListener('click', function () {
        imageContainer.scrollBy({ left: -imageContainer.offsetWidth, behavior: 'smooth' });
    });

    // Initial check for left arrow visibility
    updateLeftArrowVisibility();
});
