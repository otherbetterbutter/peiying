$(document).ready(function () {
  $(".flipbook").turn({
    width: 400,
    height: 283,
    autoCenter: true,
    display: "double", // show 2 pages when flipping
    when: {
      turning: function (event, page, view) {
        // You can add logic here if needed on page turn
      }
    }
  });
});
