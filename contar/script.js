function contar(){
  var ini = document.getElementById('txti')
  var fim = document.getElementById('txtf')
  var passo = document.getElementById('txtp')
  var res = document.getElementById('res')
  
  if (ini.value.length == 0 || fim.value.length == 0|| passo.value.length ==0){
    window.alert('ERROR')
    
  }else{
    
    res.innerHTML = 'Contando: <br>'
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    
    if ( p <= 0){
      window.alert('Passou invalido considerando passo 1')
      p = 1
    }
    if (i < f){
      
    for (let c = i; c <= f; c += p){
      res.innerHTML += `${c} `
    }
   }else{
     
     for ( let c = i; c>= f; c -= p){
       res.innerHTML += `${c} `
     }
   }
  }
}