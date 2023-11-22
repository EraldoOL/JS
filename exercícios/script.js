function carregar(){
  var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if(hora >= 0 && hora < 12){
  //Bom dia
  img.src = 'ftmanha.png.png'
  document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
      //boa tarde
      img.src = 'fttarde.png.png'
      document.body.style.background = '#b9846f'
      
    }else{
      // boa noite
      img.src = 'ftnoite.png.png'
      document.body.style.background = '#515154'
    }
}
//#e2cd9f

