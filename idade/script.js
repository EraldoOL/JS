function verificar (){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = window.document.getElementById('txtano')
  var res = document.getElementById('res')
  if (fano.value.length == 0 || fano.value > ano){
    window.alert('Verifique os dados')
    
  }else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (fsex[0].checked){
      genero = 'homem'
      if (idade >= 0 && idade < 10){
        //criança
        img.setAttribute('src','criancahomem.png.png')
      } else if (idade < 21){
        //jovem
        img.setAttribute('src','jovemhomem.png.png')
      }else if (idade < 50){
        //adulto
        img.setAttribute('src','homemadulto.png.png')
      }else{
        //idoso
        img.setAttribute('src','idosohomem.png.png')
      }
    } else if (fsex[1].checked){
      genero = 'mulher'
      if (idade >= 0 && idade < 10){
        //criança
        img.setAttribute('src','criancamulher.png.png')
      } else if (idade < 21){
        //jovem
        img.setAttribute('src','jovemmulher.png.png')
      }else if (idade < 50){
        //adulto
        img.setAttribute('src','mulheradulta.png.png')
      }else{
        //idoso
        img.setAttribute('src','idosamulher.png.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = ` Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  }
  
}