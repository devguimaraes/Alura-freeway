let posicaoInicialCarros = 600;

//Array com os valores dos carros
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 260, 320];
let velocidadeCarros = [2, 2.5, 3.5, 5, 3, 4.1];
let comprimentoCarro = 50;
let alturaCarro = 40;

//Funcao que cria o carro 1 em tela
function criaCarro() {
  for (let i = 0; i < imagemCarros.length; i += 1) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

//Funcao que da movimento ao carro
function movimentaCarro() {
  for (let i = 0; i < xCarros.length; i += 1) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

//se chegou ao fim da tela e volta para o inicio
function voltaPosicaoInicial() {
  for (let i = 0; i < imagemCarros.length; i += 1){
    if (verificaColisao(xCarros[i])){
      xCarros[i] = posicaoInicialCarros;
    }
  }
}
//verifica a colisao do carro com a borda de baixo
function verificaColisao(xCarro) {
  return xCarro < -50;
}
