const dodger = document.querySelector('#dodger');

dodger.style.backgroundColor = '#FF69B4';

function moveDodgerLeft(){
  let leftNumbers = dodger.style.left;
  let moveLeft = parseInt(leftNumbers);

  if (moveLeft > 0){
    dodger.style.left = `${moveLeft - 3}px`;
  }
}

function moveDodgerRight(){
  let rightNumbers = dodger.style.left;
  let moveRight = parseInt(rightNumbers);

  if (moveRight < 360){
    dodger.style.left = `${moveRight + 3}px`;
  }
}

function moveDodgerUp(){
  let bottomNumbers = dodger.style.left;
  let moveLeft = parseInt(leftNumbers);

  if (moveLeft > 0){
    dodger.style.left = `${moveLeft - 3}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  else if (e.key === "ArrowRight"){
    moveDodgerRight();
  }
});
