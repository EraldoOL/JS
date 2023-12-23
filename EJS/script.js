const obj = { a: 2, b: 1}
obj.c = 3
 console.log(obj)
 delete obj.c 
 console.log(obj)
 
const obj = {
  thisLocal:function(){
    
  const thisLocal = (() => console.log(this))()
  console.log(thisLocal)
  }
}
obj.thisLocal()

const resultado=(function(){
  const meuNome = 'Raoni'
  return meuNome
})()

console.log(resultado)

const str = "Eraldo oliveira"
for(let s of str){
  console.log(s.toUpperCase())
}

class Carro{
  constructor(nome,ano){
    this.nome = nome
    this.ano = ano
  }
}
const carro1 = new Carro ("Audi", 2020)
const carro2 = new Carro ("ferrari", 2010)
console.log(carro1, carro2)

const nome = "paulo"
const idade = 2023 - 1991
const str = "ola eu sou" + nome + "E minha idade é " + idade
const strT = `ola eu sou ${nome}.
e minha idade é ${idade}.`
console.log(strT)

const animal = {
  som: 'som de animal',
  tipo: 'animal',
  emitirSom: function(){
    console.log(this.som)
  }
}
const gato = {
  som:'miau',
  tipo: 'gato'
}
Object.setPrototypeOf(gato,animal)
gato.emitirSom()
const gatoRaivoso = {tipo:'gatoRaivoso',
miarForte: function(){
  console.log(this.som.toUpperCase())
 }
}
Object.setPrototypeOf(gatoRaivoso,gato)
gatoRaivoso.miarForte()

console.log('testes')
