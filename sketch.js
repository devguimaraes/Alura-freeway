//Variaveis contendo as imagens do jogo
let imagemEstrada;
let imagemAtor;
let carro1;
let carro2;
let carro3;


//Funcao de pré-carregamento das imagens
function preload(){
  imagemEstrada = loadImage("imagens/estrada.png") 
  imagemAtor = loadImage("imagens/ator-1.png")
  imagemCarro1 = loadImage("imagens/carro-1.png")
  imagemCarro2 = loadImage("imagens/carro-2.png")
  imagemCarro3 = loadImage("imagens/carro-3.png")
  
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemEstrada);
  image(imagemAtor,100, 366, 28, 28)
  image(imagemCarro1, 430, 40, 50, 40)
}