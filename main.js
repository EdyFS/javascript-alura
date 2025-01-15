function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}
/*
document.querySelector('.tecla_pom').onclick = tocaSomPom;
*/
let contador = 0;
const listaDeTeclas = document.querySelectorAll('.tecla');

while(contador < 9){
    listaDeTeclas[0].onclick = tocaSomPom;
listaDeTeclas[1].onclick = tocaSomClap;
    contador = contador + 1;
    console.log(listaDeTeclas);
    console.log(contador);
}
