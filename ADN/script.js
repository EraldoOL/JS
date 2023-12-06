let num = document.getElementById('txtn')
let sel = document.getElementById('selg')
let res = document.getElementById('res')
let val = []

function isNumero(n){
  if(Number(n) >= 1 && Number (n) <= 100){
    return true
  }else{
    return false
  }
}

function inList(n,l){
  if (l.indexOf(Number(n)) != -1){
    return true
  }else{
    return false
  }
}

function adicionar(){

  if (isNumero(num.value) && !inList(num.value,val)){
    val.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `valor ${num.value} adicionado`
    sel.appendChild(item)
    res.innerHTML = ''
  }else{
    window.alert('n é um número ou valor repetido')
  }

  num.value = ''
  num.focus()
  
}

function finalizar(){
  if(val.length == 0){
    window.alert('adc valores')
  }else{
    let tot = val.length
    let maior = val[0]
    let menor = val[0]
    let soma = 0
    let media = 0
    
    for(let pos in val){
      soma += val[pos]
      if(val[pos] > maior)
        maior = val[pos]
      if(val[pos] < menor)
        menor = val[pos]
    }
    
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p> ao todo temos ${tot} números </p>`
    res.innerHTML += `<p> maior valor inserido foi ${maior} </p>`
    res.innerHTML += `<p> o menor valor é ${menor} </p>`
    res.innerHTML += `<p>  a soma de todos os valores é ${soma}`
    res.innerHTML += `<p> a média e ${media}`
  }
}