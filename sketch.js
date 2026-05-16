
// Variáveis para o mapa

var mapaX1 = 0;
var mapaX2 = campox;
var velocidadeMapa = 2;



var campox = 500, campoy = 300;
var patinhoimg;
var patinhoX = 0, patinhoY = 100;
var patinhoSpeed = 1;

function preload() {
  patinhoimg = loadImage('patinho.png'); // Carrega a imagem do patinho
  mapaimg = loadImage('oceano.jpg');  // Carrega a imagem do mapa
}

function setup() {
  createCanvas(campox, campoy);
}

function draw() {
  background(0, 0, 0);
  mapa();
  patinho();
}

function mapa() {
  image(mapaimg, 0, 0, campox, campoy);
  image(mapaimg, mapaX2, 0, campox, campoy);


   // Move o mapa para a esquerda

  mapaX1 -= velocidadeMapa;
  mapaX2 -= velocidadeMapa;

  // Se o mapa sair completamente da tela, reposicione-o
  if (mapaX1 <= -campox) {
    mapaX1 = mapaX2 + campox;
  }
  if (mapaX2 <= -campox) {
    mapaX2 = mapaX1 + campox;
  }
}


function patinho() {
  image(patinhoimg, patinhoX, patinhoY, 100, 100);

  patinhoX += patinhoSpeed;
  patinhoY += patinhoSpeed;

  if (keyIsDown(32)) {
    patinhoY -= 2;
  }

  if (patinhoY < campoY) {
    patinhoY = campoY;
  }

}


