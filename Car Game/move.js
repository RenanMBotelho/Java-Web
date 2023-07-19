function moveCars(){
  for(let i = 0; i < 3; i++){
    xCars[i] -= vCars[i];
  }
  for(let i = 3; i < 6; i++){
    xCars[i] += vCars[i];
  }
}

function moveActor(){
  if(keyIsDown (UP_ARROW)){
    yActor -= 3;
  }
  if (keyIsDown (DOWN_ARROW)){
    yActor += 3;
  }
}

function checkEnd(){
  for(let i = 0; i < 3; i++){
    if(crossedA(xCars[i])){
    xCars [i] = width;
    }
  }
  for(let i = 3; i < 6; i++){
    if(crossedB(xCars[i])){
    xCars [i] = 0;
    }
  }
}
function crossedA(xCars){
  return xCars < - widthCar;
}

function crossedB(xCars){
  return xCars > width;
}