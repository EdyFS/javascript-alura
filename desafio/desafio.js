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

//2
let lista = document.querySelectorAll('.button');
console.log(lista);

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