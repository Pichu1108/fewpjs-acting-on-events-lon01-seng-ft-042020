const dodger = document.querySelector('#dodger');

dodger.style.backgroundColor = '#FF69B4';

function moveDodgerLeft(){
  let leftNumbers = dodger.style.left;
  let moveLeft = parseInt(leftNumbers);

  if (moveLeft > 0){
    dodger.style.left = `${moveLeft - 1}px`;
  }
}

function moveDodgerRight(){
  let leftNumbers = dodger.style.left;
  let moveLeft = parseInt(leftNumbers);

  if (moveLeft > 0){
    dodger.style.left = `${moveLeft + 1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  console.log(e.key)
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  else if (e.key === "ArrowRight"){
    moveDodgerRight();
  }
});
