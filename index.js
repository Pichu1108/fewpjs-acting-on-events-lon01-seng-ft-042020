const dodger = document.querySelector('#dodger');

dodger.style.backgroundColor = '#FF69B4';

function moveDodgerLeft(){
  let leftNumbers = dodger.style.left;
  let moveLeft = parseInt(leftNumbers);

  if (moveLeft > 0){
    dodger.style.left = `${moveLeft - 3}px`;
  }
}

function moveDodgerUp(){
  let buttomNumbers = dodger.style.bottom;
  let moveUp = parseInt(buttomNumbers);

  if (moveUp < 0){
    dodger.style.bottom = `${moveUp + 3}px`;
  }
}

function moveDodgerUp(){
  let leftNumbers = dodger.style.left;
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
  else if (e.key === "ArrowUp"){
    moveDodgerUp();
  }
  else if (e.key === "ArrowDown"){
    moveDodgerDown();
  }
});
