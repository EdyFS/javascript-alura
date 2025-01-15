/*
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;
*/

function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
let contador = 0;
const listaDeTeclas = document.querySelectorAll('.tecla');

while(contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = tocaSomPom;
listaDeTeclas[1].onclick = tocaSomClap;
    contador = contador + 1;
    console.log(listaDeTeclas);
    console.log(contador);
}
