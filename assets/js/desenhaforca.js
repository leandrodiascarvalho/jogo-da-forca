/*Script criado para organizar o desenho da forca e o boneco*/
var tela = document.querySelector('#forca');
var pincel = tela.getContext('2d');

var tela = document.querySelector('#forca');
var pincel = tela.getContext('2d');

/* Desenha a estrutura da forca */
function desenhaForca() {
  pincel.fillStyle = 'black';
  pincel.lineWidth = 5;
  pincel.beginPath();
  pincel.moveTo(100, 197);
  pincel.lineTo(100, 600);
  pincel.moveTo(100, 200);
  pincel.lineTo(280, 200);
  pincel.moveTo(100, 300);
  pincel.lineTo(200, 200);
  pincel.fill();
  pincel.stroke();
  pincel.closePath();
  pincel.lineWidth = 1;
}

/* Desenha a cabeça do boneco */
function desenhaCabeca() {
  pincel.lineWidth = 6;
  pincel.fillStyle = '#ff99dd';
  pincel.beginPath();
  pincel.arc(275, 250, 50, 0, 2 * Math.PI);
  pincel.fillStyle = '##ff99dd';
  pincel.strokeStyle = '#ff99dd';
  pincel.stroke();
  pincel.fill();
  pincel.closePath();
  pincel.lineWidth = 1;
  pincel.fillStyle = 'black';
  pincel.strokeStyle = 'black';
}

/* Desenha o tronco do boneco */
function desenhaTronco() {
  pincel.lineWidth = 6;
  pincel.beginPath();
  pincel.moveTo(275, 303);
  pincel.lineTo(275, 500);
  pincel.fillStyle = '#ff99dd';
  pincel.strokeStyle = '#ff99dd';
  pincel.fill();
  pincel.stroke();
  pincel.closePath();
  pincel.lineWidth = 1;
  pincel.fillStyle = 'black';
  pincel.strokeStyle = 'black';
}

/* Desenha a perna esquerda do boneco */
function desenhaPernaEsq() {
  pincel.lineWidth = 6;
  pincel.beginPath();
  pincel.moveTo(275, 500);
  pincel.lineTo(180, 550);
  pincel.fillStyle = '#ff99dd';
  pincel.strokeStyle = '#ff99dd';
  pincel.fill();
  pincel.stroke();
  pincel.closePath();
  pincel.lineWidth = 1;
  pincel.fillStyle = 'black';
  pincel.strokeStyle = 'black';
}

/* Desenha a perna direita do boneco */
function desenhaPernaDir() {
  pincel.lineWidth = 6;
  pincel.beginPath();
  pincel.moveTo(275, 500);
  pincel.lineTo(360, 550);
  pincel.fillStyle = '#ff99dd';
  pincel.strokeStyle = '#ff99dd';
  pincel.fill();
  pincel.stroke();
  pincel.closePath();
  pincel.lineWidth = 1;
  pincel.fillStyle = 'black';
  pincel.strokeStyle = 'black';
}

/* Desenha o braço esquerdo do boneco */
function desenhaBracoEsq() {
  pincel.lineWidth = 6;
  pincel.beginPath();
  pincel.moveTo(275, 303);
  pincel.lineTo(360, 350);
  pincel.fillStyle = '#ff99dd';
  pincel.strokeStyle = '#ff99dd';
  pincel.fill();
  pincel.stroke();
  pincel.closePath();
  pincel.lineWidth = 1;
  pincel.fillStyle = 'black';
  pincel.strokeStyle = 'black';
}

/* Desenha o braço direito do boneco */
function desenhaBracoDir() {
  pincel.lineWidth = 6;
  pincel.beginPath();
  pincel.moveTo(275, 303);
  pincel.lineTo(180, 350);
  pincel.fillStyle = '#ff99dd';
  pincel.strokeStyle = '#ff99dd';
  pincel.fill();
  pincel.stroke();
  pincel.closePath();
  pincel.lineWidth = 1;
  pincel.fillStyle = 'black';
  pincel.strokeStyle = 'black';
}

/* Função que desenha a tela de jogo */
function desenhaTela() {
  var tela = document.querySelector('#forca');
  var pincel = tela.getContext('2d');
  pincel.fillStyle = '#e9eef2';
  pincel.fillRect(0, 0, 1200, 800);
  pincel.font = '48px arial';
  pincel.fillStyle = '#000000';
  pincel.strokeStyle = '#000000';
  pincel.strokeText('Letras erradas: ', 650, 280);
  pincel.fillText('Letras erradas: ', 650, 280);
}

/*Função que escreve nos campos a letra correta*/
function escreverLetraCorreta(letra, pos) {
  var tela = document.querySelector('#forca');
  var pincel = tela.getContext('2d');
  pincel.font = '48px arial';
  pincel.strokeText(letra, 60 * pos, 680);
  pincel.fillText(letra, 60 * pos, 680);
  pincel.closePath();
}

/* Função que escreve as letras erradas no board */
function escreverLetraErrada(letra, pos) {
  var qtdeerradas = letraserradas.length;
  var tela = document.querySelector('#forca');
  var pincel = tela.getContext('2d');
  pincel.font = '20px arial';
  pincel.strokeText(letra, 650 + (qtdeerradas * 15), 320);
  pincel.closePath();
}

/* Função que escreve na tela que o jogador perdeu o jogo */
function escreverPerdeu() {
  var tela = document.querySelector('#forca');
  var pincel = tela.getContext('2d');
  pincel.beginPath();
  pincel.font = '48px arial';
  pincel.fillStyle = '#F50b26';
  pincel.fillText('Você perdeu!', 650, 420);
  pincel.closePath();
  addinit = false;
  reiniciarJogo();
}

/* Função que escreve na tela que o jogador venceu o jogo */
function escreverGanhou() {
  var tela = document.querySelector('#forca');
  var pincel = tela.getContext('2d');
  pincel.beginPath();
  pincel.font = '48px arial';
  pincel.fillStyle = '#3fd447';
  pincel.fillText('Você venceu, parabéns!', 650, 420);
  pincel.closePath();
  addinit = false;
  reiniciarJogo();
}

/*Função que desenha as linhas referentes as letras das palavras */
function desenhaLinhas(palavrasorteada) {
  var tela = document.querySelector('#forca');
  var pincel = tela.getContext('2d');
  var separa = palavrasorteada.split('');
  qtdelinhas = separa.length;
  var x = 50;
  var x2 = 100;
  for (var i = 0; i < qtdelinhas; i++) {
    pincel.fillStyle = 'black';
    pincel.beginPath();
    pincel.moveTo(x, 700);
    pincel.lineTo(x2, 700);
    x = x + 60;
    x2 = x2 + 60;
    pincel.fill();
    pincel.closePath();
    pincel.stroke();
  }
}