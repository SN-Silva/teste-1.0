var mapaimg;
var predioimg;
var campox = 5000, campoy = 300;
var patinhoimg;
var patinhoX = 0, patinhoY = 100;
var patinhoSpeed = 1;

function preload() {
  patinhoimg = loadImage('patinho.png'); // Carrega a imagem do patinho
  mapaimg = loadImage('mapa.avif');  // Carrega a imagem do mapa
  predioimg = loadImage('predio.png');  // Carrega a imagem do prédio
}

function setup() {
  createCanvas(campox, campoy);
}

function draw() {
  background(0, 0, 0);
  mapa();
  patinho();
  predio();
}

function mapa() {
  image(mapaimg, 0, 0, campox, campoy);
}

function predio() {
  image(predioimg, 300, 120, 100, 200);
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


