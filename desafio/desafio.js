document.querySelector('input[type=tel]');

/*
Aula 4
const lista = document.querySelectorAll('input[type =button]');
const telefone = document.querySelector('input[type=tel]');
for (let i = 0; i < lista.length; i++){
  const tecla = lista[i];
  tecla.onclick = function (){
    telefone.value = telefone.value + tecla.value;
  }
  
}
*/

//Exercício 1 - Aula 4
let contador = 0

let botao = document.querySelector('button');
botao.onclick = function (){
    contador = contador + 1;
    let mostrador = document.querySelector('.mostrador');
    mostrador.innerHTML = contador;
}

<button class="tecla tecla_pom">Pom</button>
let contador = 0;

function incrementarContador() {
  contador = contador + 1;
  console.log("Contador: " + contador);
}

const tecla = document.querySelector(".tecla_pom")
tecla.onclick = incrementarContador;

//2
let lista = document.querySelectorAll('.button');
console.log(lista);

const listaDeTeclas = document.querySelectorAll('.tecla');
console.log(listaDeTeclas);

//3
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;
let quarto = 0;

//for (let contador = 0; contador < listaDeTeclas.length; contador++){}
while(contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;//template string
    //console.log(instrumento);
    listaDeTeclas[contador].onclick = function (){
        tocaSom(idAudio);
        if (idAudio == '#som_tecla_puff'){
            quarto = quarto + 1;
            console.log(quarto);
        }
    }
    
    contador = contador + 1;
   // console.log(contador);
}

let contador = 0;

const listaDeTeclas = document.querySelectorAll('.tecla')

function incrementarContador() {
  contador = contador + 1;
  console.log("Contador: " + contador);
}

listaDeTeclas[3].onclick = incrementarContador;

//4
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;
let click = 0
//for (let contador = 0; contador < listaDeTeclas.length; contador++){}
while(contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;//template string
    //console.log(instrumento);
    listaDeTeclas[contador].onclick = function (){
        tocaSom(idAudio);
        click = click + 1;
        console.log(click);
        
    }
    
    contador = contador + 1;
    
   // console.log(contador);
}

let contador = 0;

const listaDeTeclas = document.querySelectorAll('.tecla');

function incrementarContador() {
  contador = contador + 1;
  console.log("Contador: " + contador);
}

let i = 0;

while (i < listaDeTeclas.length) {
  listaDeTeclas[i].onclick = incrementarContador;
  i++;
}

//5
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;
let click = 0
for (let contador = 0; contador < listaDeTeclas.length; contador++){
//while(contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;//template string
    //console.log(instrumento);
    listaDeTeclas[contador].onclick = function (){
        tocaSom(idAudio);
        click = click + 1;
        console.log(click);
        
    }
    
    contador = contador + 1;
    
   // console.log(contador);
}

let contador = 0;

const listaDeTeclas = document.querySelectorAll('.tecla');

function incrementarContador() {
  contador = contador + 1;
  console.log("Contador: " + contador);
}

for (let i = 0; i < listaDeTeclas.length; i++) {
  listaDeTeclas[i].onclick = incrementarContador;
}

//Aula 5
/*
//Alura fone

let listaTecla = document.querySelectorAll('input[type=button]');
let indice = 0;


while (indice < listaTecla.length){
  let tecla = listaTecla[indice];
  tecla.onkeydown = function (){
    tecla.classList.add('ativa');   
  }
  tecla.onkeyup = function (){
    tecla.classList.remove('ativa');
  }
  indice = indice + 1;
}

//ResoluçãoAlura
const listaDeTeclas = document.querySelectorAll('input[type=button]');

for (let indice = 0; indice < listaDeTeclas.length; indice++) {
  const tecla = listaDeTeclas[indice];

  tecla.onkeydown = function (evento) {
    if(evento.code === "Enter" || evento.code === "Space") {
    tecla.classList.add('ativa');
    }
  }
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
}
  */