let posicaoInicial = 380;

//Variaveis do ator
let xAtor = 250;
let yAtor = 380;

//Variaveis de armazenamento de pontos
let meusPontos = 0;

//Variavel para veirficar colisao
let colisao = false;

//funcao yAtsenha o ator na tela.
function criaAtor() {
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

//funcao que movimenta o ator
function movimentaAtor() {
  if (yAtor < 0) {
    yAtor = posicaoInicial;
  }

  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yAtor += 3;
    }
  }

  if (keyIsDown(RIGHT_ARROW)) {
    xAtor += 3;
  }

  if (keyIsDown(LEFT_ARROW)) {
    xAtor -= 3;
  }
}

//Verifica Colisao
function verificaColisaoCarro() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i += 1) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      comprimentoCarro,
      alturaCarro,
      xAtor,
      yAtor,
      15
    );
    if (colisao) {
      somColidiu.play()
      verificaPontosNegativos();
      yAtor = posicaoInicial;
    }
  }
}

function incluiPontos() {
  textAlign(CENTER);
  fill(128, 0, 128);
  textSize(25);
  text(meusPontos, width / 2, 25);

  if (meusPontos > 0) {
    fill(128, 0, 128);
    textSize(25);
    text(meusPontos, width / 2, 25);
  }
}

function marcaPontos() {
  if (yAtor <= 15) {
    meusPontos += 1;
    somPontos.play()
    yAtor = posicaoInicial;
  }
}

function verificaPontosNegativos() {
  if (meusPontos > 0) {
    meusPontos -= 1;
  }
}

function podeSeMover() {
  return yAtor < 366;
}
