function setup() {
  createCanvas(500, 400);
  trilhaSonora.loop()
}

function draw() {
  background(imagemEstrada);
  criaAtor();
  criaCarro();
  movimentaCarro();
  voltaPosicaoInicial()
  movimentaAtor();
  verificaColisaoCarro();
  incluiPontos();
  marcaPontos();
}
