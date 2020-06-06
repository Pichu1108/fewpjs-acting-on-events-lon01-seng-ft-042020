const dodger = document.querySelector('#dodger');

dodger.style.backgroundColor = '#FF69B4';

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    let leftNumbers = dodger.style.left
    let moveLeft = parseInt(leftNumbers)

    dodger.style.left = `${moveLeft + 1}px`
  }
});
