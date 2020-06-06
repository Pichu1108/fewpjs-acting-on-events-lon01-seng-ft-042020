const dodger = document.querySelector('#dodger');

dodger.style.backgroundColor = '#FF69B4';

function moveDodgerLeft(){
  let leftNumbers = dodger.style.left
  let moveLeft = parseInt(leftNumbers)
}

document.addEventListener("keydown", function(e) {
  console.log(e.key)
  if (e.key === "ArrowLeft") {
    let leftNumbers = dodger.style.left
    let moveLeft = parseInt(leftNumbers)

    dodger.style.left = `${moveLeft - 1}px`
  }
});
