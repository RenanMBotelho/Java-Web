let xBall = 300;
let yBall = 200;
let diameter = 20;
let raio = diameter / 2;
let velocityxBall = 6;
let velocityyBall = 6;
let xRacket1 = 5;
let yRacket1 = 150;
let lengthRacket1 = 10;
let heightRacket1 = 100;
let xRacket2 = 585;
let yRacket2 = 150;
let lengthRacket2 = 10;
let heightRacket2 = 100;
let velocityRacket2;
let scoreHome = 0;
let scoreAway = 0;
let soundRacket;
let soundPoint;
let song;
let chanceDeErrar = 0;

function preload(){
  song = loadSound("trilha.mp3");
  soundRacket = loadSound("raquetada.mp3");
  soundPoint = loadSound("ponto.mp3");
}

function setup() {
  createCanvas(600, 400);
  song.loop();
}

function showBall(){
  circle(xBall, yBall, diameter)
}

function moveBall(){
  xBall += velocityxBall;
  yBall += velocityyBall;
}

function showRacket(){
  rect(xRacket1, yRacket1, lengthRacket1, heightRacket1);
  rect(xRacket2, yRacket2, lengthRacket2, heightRacket2);
}

function checkEdge(){
  if (xBall + raio > width || xBall - raio < 0){
    velocityxBall *= -1
  }
   if (yBall + raio > height || yBall - raio < 0){
    velocityyBall *= -1
  } 
}

function moveRacket1(){
  if (keyIsDown(87)){
    yRacket1 -= 10;
  }
  if (keyIsDown(83)){
    yRacket1 += 10;
  }
}

//1vs1
function moveRacket2(){
    if (keyIsDown(UP_ARROW)){
    yRacket2 -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRacket2 += 10;
  }
}

//Versus Computer
//function moveRacket2(){
  //velocityRacket2 = yBall - yRacket2 - lengthRacket1 / 2 - 30;
  //yRacket2 += velocityRacket2 + chanceDeErrar;
  //calculaChanceDeErrar();
//}

function calculaChanceDeErrar() {
  if (scoreAway >= scoreHome) {
    chanceDeErrar += 1;
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

function checkPoint(){
  if(xBall - raio < xRacket1 + lengthRacket1 && 
    yBall - raio < yRacket1 + heightRacket1 &&
    yBall - raio > yRacket1){
    velocityxBall *= -1;
    soundRacket.play();
  }
  if(xBall + raio > xRacket2 - lengthRacket2 && 
    yBall + raio < yRacket2 + heightRacket2 &&
    yBall + raio > yRacket2){
    velocityxBall *= -1;
    soundRacket.play();
  }
}

function score(){
  if(xBall > 590){
    scoreHome += 1;
    soundPoint.play();
  }
  if(xBall < 10){
    scoreAway += 1;
    soundPoint.play();
  }
}

function showScore(){
  stroke(255);
  textSize(16);
  textAlign(CENTER);
  fill(color(255, 140, 0));
  rect(230, 5, 40, 30);
  fill(color(255, 140, 0));
  rect(330, 5, 40, 30);
  fill(255);
  text(scoreHome, 250, 25);
  text(scoreAway, 350, 25);
}

function resetBall(){
    if (xBall - raio < 0){
    xBall = 23;
    }
    if (xBall + raio > width){
    xBall = 577;
    }
}

function draw() {
  background(0);
  showBall();
  moveBall();
  checkEdge();
  showRacket();
  moveRacket1();
  checkPoint();
  moveRacket2();
  showScore();
  score();
  resetBall();
  }