var campox = 500, campoy = 300;
var patinhoimg;
var patinhoX = 0, patinhoY = 100;
var patinhoSpeed = 1;

function preload() {
  patinhoimg = loadImage('patinho.png'); // Load any assets here if needed
}

function setup() {
  createCanvas(campox, campoy);
}

function draw() {
  background(0, 0, 0);
  patinho();
}

function patinho() {
  image(patinhoimg, patinhoX, patinhoY, 140, 50);

  patinhoX += patinhoSpeed;
  patinhoY += patinhoSpeed;

  if (keyIsDown(32)) {
    patinhoY -= 2;
  }
  if (patinhoY < 0) {patinhoY = 0;}
  if (patinhoY > campoy) {patinhoY = campoy;}

}


