// js/alloutput.js

document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded before executing JavaScript

    // Get all elements with the class 'box'
    var boxes = document.querySelectorAll('.box');

    // Iterate through each box element
    boxes.forEach(function (box) {
        // Find the video element within the current box
        var video = box.querySelector('.video');

        // Add an event listener to play the video when the box is hovered
        box.addEventListener('mouseover', function () {
            video.play();  // Start playing the video
        });

        // Add an event listener to pause the video when the mouse leaves the box
        box.addEventListener('mouseout', function () {
            video.pause();  // Pause the video
        });
    });
});
