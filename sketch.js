//Variaveis contendo as imagens do jogo
let imagemEstrada;
let imagemAtor;
let carro1;
let carro2;
let carro3;

//Variaveis do ator
let yAtor = 366;

//Variaveis dos carros
let xCarro1 = 600;

//Funcao de pré-carregamento das imagens
function preload() {
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png");
  imagemCarro1 = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemEstrada);
  criaAtor();
  criaCarro1();
  movimentaCarro1();
  movimentaAtor();
}

//funcao que desenha o ator na tela.
function criaAtor() {
  image(imagemAtor, 100, yAtor, 28, 28);
}

//Funcao que cria o carro 1 em tela
function criaCarro1() {
  image(imagemCarro1, xCarro1, 40, 50, 40);
}

//Funcao que da movimento ao carro 1
function movimentaCarro1() {
  xCarro1 -= 2;
}

//funcao que movimenta o ator
function movimentaAtor() {
  if (yAtor > 400 || yAtor < 0) {
    yAtor = 366;
  }

  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yAtor += 3;
  }
}
