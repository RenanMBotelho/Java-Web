function setup(){
  createCanvas(600, 400);
  song.loop();
}

function showActor(){
   image(actor, xActor, yActor, 29, 28);
}

function showCars(){
  for(let i = 0; i < cars.length; i++){
    image(cars[i], xCars[i], yCars[i], widthCar, lengthCar);
  }
}

function draw() {
  background(road);
  showActor();
  showCars();
  moveCars();
  moveActor();
  checkEnd();
  collideA();
  collideB();
  showScore();
  makePoint();
}