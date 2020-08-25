//Exc 1

const numberBase = document.querySelector('#numberBase');

const resultado = document.querySelector('#resultado');

const square = numero => numero * numero;

const processamento1 = () => {

   resultado.innerHTML = square(numberBase.value);
}

button1.addEventListener('click', processamento1);

//Exc 2

const numero1 = document.querySelector('#numero1');

const numero2 = document.querySelector('#numero2');

const resultado2 = document.querySelector('#resultado2');

const processamento2 = () => {

  resultado2.innerHTML = Math.max(numero1.value, numero2.value);

}

button2.addEventListener('click', processamento2);

//Exc 3

const nome = document.querySelector('#nome');

const saoPaulo = document.querySelector('#SP');

const rioDeJaneiro = document.querySelector('#RJ');


const resultado3 = document.querySelector('#resultado3');

const radio1 = document.querySelector('#radio1');

const radio2 = document.querySelector('#radio2');

function ifState(name, state){

  if (radio1.checked){

    resultado3.innerHTML = `${nome.value} reside no estado de ${saoPaulo.innerText}`;

  }
  else if(radio2.checked){

    resultado3.innerHTML =  `${nome.value} reside no estado de ${rioDeJaneiro.innerText}`;
  }
}

button3.addEventListener('click', ifState);

//Exc 4

const nome2 = document.querySelector('#nome2');

const frontEnd = document.querySelector('#prof1');

const backEnd = document.querySelector('#prof2');

const designWeb = document.querySelector('#prof3');

const checkbox1 = document.querySelector('#checkbox1');

const checkbox2 = document.querySelector('#checkbox2');

const checkbox3 = document.querySelector('#checkbox3');

let arrayProf = ['frontEnd', 'backEnd', 'designWeb'];

let arrayChk = ['checkbox1', 'checkbox2', 'checkbox3'];

let area = [];

function knowledge (nome, profissao){

  if(checkbox1.checked){

    area += `${frontEnd.innerText}, `;
  }
  if(checkbox2.checked){

    area += `${backEnd.innerText}, `;
  }
  if(checkbox3.checked){

    area += `${designWeb.innerText}, `;
  }

resultado4.innerHTML = `${area} é a área de interesse de ${nome2.value}`
}

button4.addEventListener('click', knowledge);