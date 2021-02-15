// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];


let i = 0;
let anterior = document.querySelector('#anterior');
let proxima = document.querySelector('#proximo');
let img = document.querySelector('img#slide');

anterior.addEventListener('click', function(){
    i--;
    if (i < 0){
        i = 4;
    }
    img.src = servidorDasImagens + todasAsImagens[i];
});

proxima.addEventListener('click', function(){
  i++;
  if (i > 4){
      i = 0;
  }
  img.src = servidorDasImagens + todasAsImagens[i];
});