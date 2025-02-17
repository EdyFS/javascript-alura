/*
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;
*/

function tocaSom(seletorAudio){
    const elemento =document.querySelector(seletorAudio);

     if(elemento != null && elemento.localName === 'audio'){ //pederia ser usado elemento && elemento.localName === 'audio',pois já entende que o elemento é diferente de nulo
        elemento.play();
        
     }
     else{
        alert('Elemento não encontrado ou seletor inválido')
     }
}

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;

for (let contador = 0; contador < listaDeTeclas.length; contador++){
//while(contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;//template string
    //console.log(instrumento);
    //listaDeTeclas[contador].onclick = function (){
    tecla.onclick = function (){
        tocaSom(idAudio);     
    }
    tecla.onkeydown = function (evento){
        console.log(evento.code);
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
    
    //contador = contador + 1;
    
   // console.log(contador);
}
