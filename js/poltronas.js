/*
      Script para localizacao de poltronas disponiveis no cinema;
*/
window.onload = function(){
      carregarPoltronas();
}

var poltronas = [false, true, false, true, true, true, false, true, false];

function carregarPoltronas(){
      imagens = document.getElementsByTagName('img');

      for(var i = 0; i < imagens.length; i++){
            if(poltronas[i] == true){
                  imagens[i].src = 'img/disponivel.png';
            }else{
                  imagens[i].src = 'img/indisponivel.png';
            }
      }
}

function selecionarPoltrona(){
      var imagens = document.getElementsByTagName('img');
      for(var i = 0; i < imagens.length; i++){
            if(poltronas[i] == true){
                  imagens[i].src = 'img/selecionada.png';

                  var quer = confirm('Você quer esta poltrona?');
                  if(quer == true){
                        break;
                  }else{
                        imagens[i].src = 'img/disponivel.png';
                  }
            }
      }
}
function selecionarCasal(){
      var imagens = document.getElementsByTagName('img');
      for(var i = 0; i < imagens.length; i++){
            if(poltronas[i] == true && poltronas[i+1] == true){
                  imagens[i].src = 'img/selecionada.png';
                  imagens[i+1].src = 'img/selecionada.png';

                  var quer = confirm('Você quer estas poltronas?');
                  if(quer == true){
                        break;
                  }else{
                        imagens[i].src = 'img/disponivel.png';
                        imagens[i+1].src = 'img/disponivel.png';
                  }
            }
      }
}
