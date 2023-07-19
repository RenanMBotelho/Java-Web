//Variáveis atores
let road;
let actor;
let widthCar = 50;
let lengthCar = 40;
let collide = false;
let score = 0;

//Posições
let xActor = 100;
let yActor = 368;
let xCars = [540, 540, 540, 10, 10, 10];
let yCars = [42, 98, 145, 215, 263, 320];

//Velocidades
let vCars = [7, 5, 6, 4, 5, 6];

//Variáveis sonoras
let song;
let crash;
let pointSong;

function preload(){
  road = loadImage ("Imagens/estrada.png");
  actor = loadImage ("Imagens/ator-1.png");
  car1 = loadImage ("Imagens/carro-1.png");
  car2 = loadImage ("Imagens/carro-2.png");
  car3 = loadImage ("Imagens/carro-3.png");
  car4 = loadImage ("Imagens/carro-4.png");
  car5 = loadImage ("Imagens/carro-5.png");
  car6 = loadImage ("Imagens/carro-6.png");
  cars = [car1, car2, car3, car4, car5, car6];
  song = loadSound ("Songs/trilha.mp3");
  crash = loadSound ("Songs/colidiu.mp3");
  pointSong = loadSound ("Songs/pontos.wav");
}

function collideA(){
  for(let i = 0; i < 3; i++){
    collide = collideRectCircle(xCars[i], yCars[i], widthCar, lengthCar, xActor, yActor, 15);
    if(collide){
      restart();
      crash.play();
    }
  }
}

function collideB(){
  for(let i = 3; i < 6; i++){
    collide = collideRectCircle(xCars[i], yCars[i], widthCar, lengthCar, xActor + widthCar, yActor, 15);
    if(collide){
      restart();
      crash.play();
    }
  }
}

function restart(){
  yActor = 368;
}

function showScore(){
  fill(color(255, 255, 0));
  textSize(25);
  text(score, 50, 27);
}

function makePoint(){
  if(yActor < 0){
    score++;
    pointSong.play();
    restart();
  }
}