const palavraSecreta = [];

const canvas_Front = document.querySelector('.canvas_front');
const pincel_Front = canvas_Front.getContext('2d');

const canvas = document.querySelector('.canvas'); //Canvas
const pincel = canvas.getContext('2d'); // Pincel do Canvas
const regex = new RegExp("^[A-Z]") // Letras Permitidas

// Seleção dos Elementos HTML
const html_palavra_Sorteada = document.querySelector('.palavra_secreta');
const html_msg = document.querySelector('.msg');
const html_input = document.querySelector('#letra_Digitada');
const html_chances = document.querySelector('.mostra_Chances');
const html_Exibe_letras = document.querySelector(".Msg_Letra_digitadas");

html_chances.innerHTML = "TENTATIVAS: " + "[ " + chances + " ]";
inicia_Game();

function inicia_Game() {

  lista_Digitadas = [];
  lista_Letras = [];
  pos = '';
  chances = 6;
  erro_Length = 2;
  palavra_Sorteada = sorteia_Palavra();
  desenha_Area_Forca();
  recebe_Letra();
  mostra_Palavra_Dica();
  recebe_Letra();
  console.log(palavra_Sorteada)
}

function sorteia_Palavra() {
  html_palavra_Sorteada.innerHTML = '';
  pos = Math.round(Math.random() * dados_P.length);
  palavra_Sorteada = dados_P[pos].toUpperCase();

  recebe_Letra();
  mostra_Palavra_Dica();

}

function mostra_Palavra_Dica() {

  html_palavra_Sorteada.innerHTML = "";

  for (let i = 0; i < palavra_Sorteada.length; i++) {

    if (lista_Letras[i] === undefined) {
      lista_Letras[i] = "&nbsp;";
      html_palavra_Sorteada.innerHTML = html_palavra_Sorteada.innerHTML + "<div class='Letra_secreta'>" + lista_Letras[i] + "</div>"

    } else {
      html_palavra_Sorteada.innerHTML = html_palavra_Sorteada.innerHTML + "<div class='Letra_secreta'>" + lista_Letras[i] + "</div>"
    }
  }
}

function recebe_Letra() {

  html_input.addEventListener('keyup', (event) => {

    let value = html_input.value;
    html_msg.innerHTML = "";
    if (event.key === "Enter") {
      event.preventDefault();
      verifica_Letra(value);

      if (regex.test(value) === true) {

        mostra_Palavra_Dica();
      } else {
        html_msg.innerHTML = "CARACTERES ESPECIAIS, LETRAS MINUSCULAS E NUMEROS NÃO SÃO PERIMITIDOS!";
      }
      html_input.value = "";
    }

  });
}

function verifica_Letra(value) {

  let vitoria = true;
  if (chances > 1) {

    if (value.length > 1) {
      erro_Length-- //TOTAL DE ERRO ACEITO 1 MSG 0
      html_msg.innerHTML = 'DIGITE APENAS UMA LETRA, SE PERSISTIR SERÁ ERRO!';
      html_input.value = '';

      if (erro_Length === 0) {
        chances--;
        compara_Desenho();
        html_chances.innerHTML = "TENTATIVAS: " + chances;
        html_msg.innerHTML = 'ERRO CONTADO!'

      }
    } else if (palavra_Sorteada.indexOf(value, palavra_Sorteada) < 0) {
      chances--;
      compara_Desenho();
      html_chances.innerHTML = "TENTATIVAS: " + chances;
      lista_Digitadas += " [ " + value + " ] ";
      html_Exibe_letras.innerHTML = lista_Digitadas;

    } else {

      for (let i = 0; i < palavra_Sorteada.length; i++) {
        if (palavra_Sorteada[i].indexOf(value, palavra_Sorteada[i]) === 0) {
          lista_Letras[i] = value;

        }
        if (palavra_Sorteada[i] != lista_Letras[i]) {
          vitoria = false;

        }
      }

      if (vitoria === true) {
        html_msg.classList.toggle("msg_Ganhou");
        html_msg.innerHTML = "PARABÉNS VOCÊ VENCEU!";

      }
    }
  } else {
    chances = 0;
    html_chances.innerHTML = "TENTATIVAS: " + chances;
    compara_Desenho();
    html_msg.innerHTML = "QUE PENA TENTE NOVAMENTE! A PALAVRA ERA: " + palavra_Sorteada;
  }

}

function compara_Desenho() {

  if (chances == 5) {
    desenha_Cabeca();
  } else if (chances == 4) {
    desenha_Corpo();
  } else if (chances == 3) {
    desenha_Braco_Direito();
  } else if (chances == 2) {
    desenha_Braco_Esquerdo();
  } else if (chances == 1) {
    desenha_Perna_Direita();
  } else if (chances == 0) {
    desenha_Perna_Esquerda();
  } else {
    desenha_Boneco_Completo();
  }

}

function adciona_Palavra() {

  const input = document.querySelector("#nova_palavra");
  const msg_addPalavra = document.querySelector(".msg_escolha");

  input.addEventListener("keyup", (event) => {

    if (event.key === "Enter") {
      msg_addPalavra.innerHTML = 'PALAVRA ADCIONADA!'
      input.value = '';
    }
  });
}
adciona_Palavra();