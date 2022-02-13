const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');
pincel.fillStyle = 'bisque';
pincel.fillRect(0, 0, 1200, 800);


function desenha_Boneco_Completo() {

  // AREA DA FORCA
  pincel.beginPath();
  pincel.moveTo(100, 120);
  pincel.lineWidth = 3;
  pincel.lineTo(100, 9);
  pincel.stroke();

  // 
  pincel.beginPath();
  pincel.moveTo(160, 10);
  pincel.lineWidth = 2;
  pincel.lineCap = 'round';
  pincel.lineTo(100, 10);
  pincel.stroke();

  // FORCA

  pincel.beginPath();
  pincel.moveTo(160, 10);
  pincel.lineWidth = 2;
  pincel.lineCap = 'round';
  pincel.lineTo(160, 20);
  pincel.stroke();

  // PISO DA FORCA
  pincel.beginPath();
  pincel.moveTo(290, 120);
  pincel.lineWidth = 2;
  pincel.lineCap = 'round';
  pincel.lineTo(10, 120);
  pincel.stroke();

  // CABEÇA
  pincel.beginPath();
  pincel.arc(160, 30, 10, 0, 2 * Math.PI);
  pincel.lineWidth = 2;
  pincel.stroke();


  // CORPO
  pincel.beginPath();
  // INICIO DO CORPO
  pincel.moveTo(160, 40);
  pincel.lineWidth = 3;
  // FIM DO CORPO
  pincel.lineTo(160, 80);
  pincel.stroke();

  // BRAÇOS DIREITO
  pincel.beginPath();
  // INICIO DO BRACO DIREITO
  pincel.moveTo(160, 40);
  pincel.lineWidth = 2;
  pincel.lineCap = 'round';
  // FIM DO BRACO DIREITO
  pincel.lineTo(180, 60);
  pincel.stroke();

  // BRAÇOS ESQUERDO
  pincel.beginPath();
  // INICIO DO BRACO ESQUERDO
  pincel.moveTo(160, 40);
  pincel.lineWidth = 2;
  pincel.lineCap = 'round';
  // FIM DO BRACO ESQUERDO
  pincel.lineTo(140, 60);
  pincel.stroke();

  // PERNA DIREITA
  pincel.beginPath();
  // INICIO DA PERNA DIREITA
  pincel.moveTo(160, 80);
  pincel.lineWidth = 2;
  pincel.lineCap = 'round';
  // FIM DO BRACO ESQUERDO
  pincel.lineTo(140, 100);
  pincel.stroke();

  // PERNA DIREITA
  pincel.beginPath();
  // INICIO DA PERNA DIREITA
  pincel.moveTo(160, 80);
  pincel.lineWidth = 2;
  pincel.lineCap = 'round';
  // FIM DO BRACO ESQUERDO
  pincel.lineTo(180, 100);
  pincel.stroke();

}

function desenha_Area_Forca() {


  // PILAR LATERAL
  pincel.beginPath();
  pincel.fillStyle = "#dedede";
  pincel.fillRect(40, 10, 10, 90);
  pincel.lineWidth = 2;
  pincel.stroke();
  // PILAR LATERAL
  pincel.beginPath();
  pincel.fillStyle = "#dedede";
  pincel.fillRect(250, 10, 10, 90);
  pincel.lineWidth = 2;
  pincel.stroke();

  // // PILAR LATERAL
  // pincel.beginPath();
  // pincel.fillStyle = "#f5cc87";
  // pincel.fillRect(40, 10, 220, 7);
  // pincel.lineWidth = 2;
  // pincel.stroke();


  // LINHA DE TRAS
  pincel.beginPath();
  pincel.moveTo(260, 100);
  pincel.lineWidth = 2;
  pincel.lineCap = 'round';
  pincel.strokeStyle = "#dedede";

  pincel.lineTo(40, 100);
  pincel.stroke();

  pincel.beginPath();
  pincel.moveTo(180, 10);
  pincel.lineWidth = 2;
  pincel.strokeStyle = "#dedede";
  pincel.lineCap = 'round';
  pincel.lineTo(100, 10);
  pincel.stroke();




  // 
  pincel.beginPath();
  pincel.moveTo(140, 10);
  pincel.lineWidth = 2;
  pincel.strokeStyle = "#dedede";
  pincel.lineCap = 'round';
  pincel.lineTo(110, 30);
  pincel.stroke();

  // AREA DA CORDA
  pincel.beginPath();
  pincel.moveTo(170, 10);
  pincel.lineWidth = 1;
  pincel.strokeStyle = "#dedede";
  pincel.lineCap = 'round';
  pincel.lineTo(170, 20);
  pincel.stroke();

  // pincel.beginPath();
  // pincel.strokeStyle = "#5c5858";
  // pincel.arc(170, 26, 6, 0, 2 * Math.PI);
  // pincel.lineWidth = 1;
  // pincel.stroke();

  // RETANGULO
  pincel.beginPath();
  // pincel.fillStyle = "#dedede";
  pincel.strokeStyle = "#dedede";
  pincel.fillRect(10, 134, 280, 10);
  pincel.lineWidth = 2;
  pincel.stroke();

  // LINHA LATERAL PISO DIREITA
  pincel.beginPath();
  pincel.moveTo(290, 134);
  pincel.lineWidth = 2;
  pincel.lineCap = 'round';
  pincel.lineTo(260, 100);
  pincel.stroke();



  // LINHA LATERAL PISO ESQUERA
  pincel.beginPath();
  pincel.moveTo(10, 134);
  pincel.lineWidth = 2;
  pincel.lineCap = 'round';
  pincel.lineTo(40, 100);
  pincel.stroke();

  // LINHAS DO PISO
  pincel.beginPath();
  pincel.moveTo(30, 134);
  pincel.lineWidth = 2;
  pincel.lineCap = 'round';
  pincel.lineTo(60, 100);
  pincel.stroke();

  pincel.beginPath();
  pincel.moveTo(50, 134);
  pincel.lineWidth = 2;
  pincel.lineCap = 'round';
  pincel.lineTo(76, 100);
  pincel.stroke();

  pincel.beginPath();
  pincel.moveTo(70, 134);
  pincel.lineWidth = 2;
  pincel.lineCap = 'round';
  pincel.lineTo(90, 100);
  pincel.stroke();

  pincel.beginPath();
  pincel.moveTo(90, 134);
  pincel.lineWidth = 2;
  pincel.lineCap = 'round';
  pincel.lineTo(106, 100);
  pincel.stroke();

  pincel.beginPath();
  pincel.moveTo(106, 134);
  pincel.lineWidth = 2;
  pincel.lineCap = 'round';
  pincel.lineTo(120, 100);
  pincel.stroke();

  pincel.beginPath();
  pincel.moveTo(126, 134);
  pincel.lineWidth = 2;
  pincel.lineCap = 'round';
  pincel.lineTo(136, 100);
  pincel.stroke();

  pincel.beginPath();
  pincel.moveTo(150, 134);
  pincel.lineWidth = 2;
  pincel.lineCap = 'round';
  pincel.lineTo(160, 100);
  pincel.stroke();

  pincel.beginPath();
  pincel.moveTo(170, 134);
  pincel.lineWidth = 2;
  pincel.lineCap = 'round';
  pincel.lineTo(180, 100);
  pincel.stroke();

  pincel.beginPath();
  pincel.moveTo(190, 134);
  pincel.lineWidth = 2;
  pincel.lineCap = 'round';
  pincel.lineTo(200, 100);
  pincel.stroke();

  pincel.beginPath();
  pincel.moveTo(210, 134);
  pincel.lineWidth = 2;
  pincel.lineCap = 'round';
  pincel.lineTo(220, 100);
  pincel.stroke();

  pincel.beginPath();
  pincel.moveTo(230, 134);
  pincel.lineWidth = 2;
  pincel.lineCap = 'round';
  pincel.lineTo(240, 100);
  pincel.stroke();

  pincel.beginPath();
  pincel.moveTo(250, 134);
  pincel.lineWidth = 2;
  pincel.lineCap = 'round';
  pincel.lineTo(260, 100);
  pincel.stroke();

  pincel.beginPath();
  pincel.moveTo(270, 134);
  pincel.lineWidth = 2;
  pincel.lineCap = 'round';
  pincel.lineTo(274, 116);
  pincel.stroke();

  //AREA FORCA
  pincel.beginPath();
  pincel.fillStyle = "#dedede";
  pincel.fillRect(100, 10, 10, 110);
  pincel.lineWidth = 2;
  pincel.stroke();



  // PILAR LATERAL
  pincel.beginPath();
  pincel.fillStyle = "#dedede";
  pincel.fillRect(9, 44, 10, 101);
  pincel.lineWidth = 2;
  pincel.stroke();
  // PILAR LATERAL
  pincel.beginPath();
  pincel.fillStyle = "#dedede";
  pincel.fillRect(281, 44, 10, 101);
  pincel.lineWidth = 2;
  pincel.stroke();

}

function desenha_Cabeca() {

  // CABEÇA
  pincel.beginPath();
  pincel.strokeStyle = "#dedede";
  pincel.arc(170, 30, 10, 0, 2 * Math.PI);
  pincel.lineWidth = 2;
  pincel.stroke();

}

function desenha_Corpo() {

  // CORPO
  pincel.beginPath();
  // INICIO DO CORPO
  pincel.moveTo(170, 40);
  pincel.lineWidth = 2;
  // FIM DO CORPO
  pincel.lineTo(170, 70);
  pincel.stroke();

}

function desenha_Braco_Direito() {

  // BRAÇOS DIREITO
  pincel.beginPath();
  // INICIO DO BRACO DIREITO
  pincel.moveTo(170, 40);
  pincel.lineWidth = 2;
  pincel.lineCap = 'round';
  // FIM DO BRACO DIREITO
  pincel.lineTo(180, 60);
  pincel.stroke();

}

function desenha_Braco_Esquerdo() {

  // BRAÇOS ESQUERDO
  pincel.beginPath();
  // INICIO DO BRACO ESQUERDO
  pincel.moveTo(170, 40);
  pincel.lineWidth = 2;
  pincel.lineCap = 'round';
  // FIM DO BRACO ESQUERDO
  pincel.lineTo(160, 60);
  pincel.stroke();

}

function desenha_Perna_Esquerda() {

  // PERNA DIREITA
  pincel.beginPath();
  // INICIO DA PERNA DIREITA
  pincel.moveTo(170, 70);
  pincel.lineWidth = 2;
  pincel.lineCap = 'round';
  // FIM DO BRACO ESQUERDO
  pincel.lineTo(160, 90);
  pincel.stroke();

}

function desenha_Perna_Direita() {

  // PERNA DIREITA
  pincel.beginPath();
  // INICIO DA PERNA DIREITA
  pincel.moveTo(170, 70);
  pincel.lineWidth = 2;
  pincel.lineCap = 'round';
  // FIM DO BRACO ESQUERDO
  pincel.lineTo(180, 90);
  pincel.stroke();

}