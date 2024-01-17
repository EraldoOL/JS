const saudacao =  (nome) => alert('ola ' + nome)
const processaEntrada = (callback) => {
  const nome = prompt('digite seu nome')
  callback(nome)
}
processaEntrada(saudacao)

const callback = e => alert('aconteceu um evento ' + e.type)
window.addEventListener('click',callback)

const somar =(x,y) => x+y
const calcular= (x,y, computar)=>computar(x,y)
const resultado = calcular(20,30, somar)
console.log(resultado)

const arr = [1,2,3 ]
const newArr = arr.map (x=> x+x)
console.log(newArr)

const Dev = function(nome,idade, linguagem,tipoDev){
  this.nome = nome
  this.idade = idade
  this.linguagem = linguagem
  this.tipoDev = tipoDev
    this.saudacao = function(){
      console.log(`oi sou dev ${this.tipoDev},trabalho com ${this.linguagem} e me chamo ${nome}`);
    }
  }
const frontendDev = function(nome,idade, linguagem,tipoDev,framework) {
  const newDev = new Dev(nome,idade, linguagem,"frontendDev")
newDev.framework = framework
Object.setPrototypeOf(this,newDev)
}
const backendDev = function(nome,idade, linguagem,tipoDev,bacodedaos ){
  const newDev = new Dev(nome,idade, linguagem,"backendDev")
  newDev.bacodedaos = bacodedaos
  Object.setPrototypeOf(this,newDev)
}
const frontend1 = new frontendDev("pedro" ,"35", "js","Frontend","react")
const backend1 = new backendDev("joao",'25',"c#","Backend","sql")
console.log(frontend1)
frontend1.saudacao()
console.log(backend1)
backend1.saudacao()
console.log('testes')

const umaPromessa = new Promise((resolve,reject) => {
  let soma = 1 + 1
  if (soma === 2){
    resolve('tudo certo')
  }else{
    reject('deu ruim')
  }
})
console.log('esperando promise')
umaPromessa.then((resultado) => {
  console.log(`valor do then: ${resultado}`)
}).catch((erro) => {
  console.error(` valor do catch ${erro}`)
}).finally(() => {
  console.log(`indepedente do resoltado`)
})

const promise1 = new Promise((resolve,reject) => {
 setTimeout(() => resolve("promise 1 resolvida"),1000)  
})
const promise2 = new Promise((resolve,reject) => {
  setTimeout(() => resolve("promise 2 resolvida"),500)  
})
const promise3 = new Promise((resolve,reject) => {
  setTimeout(() => resolve("promise 3 resolvida"),100)  
})
Promise.all([  promise1,promise1,promise3]).then((messages) =>{
  console.log(messages)
})
Promise.race([  promise1,promise1,promise3]).then((message) =>{
  console.log(message)
})

const cincoMil = () => new Promise((resolve,reject) => {
  setTimeout(() => resolve("promise cincomil resolvida"),5000)
})
const mil = () => new Promise((resolve,reject) => {
  setTimeout(() => reject("promise mil resolvida"),1000)
})
const resolvedora = async () => {
  const resultado1 = await cincoMil().then((res) => {
    console.log(res)
    return res
  }).catch((err) => {
    console.log(err)
  })
  const resultado2 = await mil().then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
  console.log(`Mensages: \n${resultado1} \n${resultado2}`)
}
resolvedora()

const statusPantera = 'Feliz'
const isPanteraFeliz = new Promise((resolve,reject) => {
  switch (statusPantera){
    case "Feliz":
      resolve({
        mensagem: "Feliz",
      })
      break
      case "entediado":
      reject({
        mensagem:"Entendiado"
      })
      break
      case "triste":
        reject({
          mensagem: "Triste"
        })
        break
        default:
        reject({
          mensagem: "emocionante indefinido"
        })
  }
})
isPanteraFeliz.then((response) => {
  console.log('no primeiro them')
  return {mensagem: `${response.mensagem}`}
}).then((response) => {
  console.log('no segundo then')
  return {mensagem: `O gato está ${response.mensagem}`}
}).then((response) => {
  console.log('no terceiro then')
  console.log(`Tudo certo ${response.mensagem}`)
}).catch((error) => {
  console.error(`deu ruim... o gato está ${error.mensagem}`)
})

isPanteraFeliz.then((response) => {
  console.log('no primeiro them')
  return {mensagem: `${response.mensagem}`}
}).then((response) => {
  throw new Error("Deu ruim")
}).catch((error) => {
  console.error(`${error.message}`)
}).then((response) => {
  console.log('no terceiro then')
  console.log(`tudo certo, ${response.mensagem}`)
}).catch((error) => {
  console.log(`Deu ruim o gato está ${error .mensagem}`)
})

//capiturar erro

const main = () => {
  try{
    codigo
  }catch (error){
    console.error(` Deu erro no codigo: ${error}`)
  }finally{
    console.info(`esse valor sempre sera mostrado`)
  }
}
main()

const funcao1 = () => {
  console.log("sou a funcao1")
  const valor = true
  try{
    if(valor) {
      throw new Error("deu erro no valor")
    }
    codigo
  }catch (error){
    console.error(error)
    throw error
  }
}
const funcao2 = () => {
  console.log("sou a funcao2")
  asdf
}
const main =() =>{
  try{
  funcao1()
  funcao2()
  console.log("passou por aki")
  }catch (error){
    console.error(error)
  }
}
main()

const funcao1 = () => {
}
const funcao2 = () => {
}
const funcao3 = () => {
}
const main = () => {
  try {
     try{
        try{
           try{
              try{
            throw new Error("deu erro 3")
          }catch (error){
            console.error(error)
            throw error
          }
        }catch (error){
          console.error(error)
          throw error
        }
      }catch (error){
        console.error(error)
        throw error
      }
    }catch (error){
      console.error(error)
      throw error
   }
 }catch (error) {
   console.error(error)
  }
  console.log("passou aki")
}
main()





//VOU PRECISAR





const somaTresNumeros = (num1, num2, num3) => {
  return num1 + num2 + num3
}

console.log(somaTresNumeros(1 , 2 , 3))


function somaNumerosInfinitamentev1 () {
  const args = Array.from(arguments)
  let soma = 0;
  
  for(let i = 0; i < args.length; i++){
    soma += args[i]
  }
  return soma;
}
console.log(somaNumerosInfinitamentev1(1,2,3,4,5))


function somaNumerosInfinitamentev1 (...args) {
  return args.reduce((acumulador, valorAtual) => acumulador += valorAtual
  )
}
console.log(somaNumerosInfinitamentev1(1,2,3,4))

const multiplicarPeloPrimeiro = (multipicador, ...args) => {
  return args.map((num) =>  multipicador * num
  )
}
console.log(multiplicarPeloPrimeiro(2,1,2,3,4))




/*const somaTresNumeros = (num1, num2, num3) => {
  return num1 + num2 + num3
}

console.log(somaTresNumeros(...listaNumeros))

// CONCATENAR

const listaNumeros1 = [1,2,3]
const listaNumeros2 = [4,5,6]

const listaNumerosTotal = [...listaNumeros1, listaNumeros2]
console.log("esperar")

// Object.assign(obj) cria objeto novo

const obj = {a: 1, b: 1}
const obj2 = {prop1: 1, prop2: 1}

const objCopy = {...obj1, ...obj2}

console.log('esperar')

const obj = { a: "asdf", b: "ksksj"}




// detructor 





const foo =[ "um" , "dois", "tres"];

const [um, dois , tres] = foo;

console.log(um)
console.log(dois)
console.log(tres)

let a, b

[a,b] = [1,2]

console.log(a)
console.log(b)

let a = 1
let b = 3

[a,b] = [b,a]

console.log(a,b)

const [a, ...b] = [1,2,3]

console.log(a,b)

const o = {p: 42,q: true}
const {p,q} = o

console.log(p,q)

let a,b

({a,b} = {a:1 ,b:2})

console.log(a,b)

const o = {p: 42,q: true}
const {p: foo, q: bar} = o

console.log(foo,bar)

// destruturar de primeira

const {a = 10, b = 5} = {a: 3}
console.log(a,b)

let somar = (n1,n2,n3) => {
  return n1 + n2 +n3
}
console.log(somar(1,2,3))


function multiplicar(a = 1,b = 1) {
  
  return a*b
}
console.log(multiplicar(5))
console.log(multiplicar())
console.log(multiplicar(undefined,6))

function test(num = 1) {
  console.log(typeof num)
}
test()
test(undefined)

function concatenar(value, array =[]) {
  array.push(value)
  return array
}
concatenar(1)
concatenar(2)
console.log(concatenar(3))

//toda função retorna alguma coisa
// destruturar
function somaArrays ([x,y] = [1,2], {z:z} = {z:3}) {
  return x + y + z
}
console.log(somaArrays())
console.log(somaArrays([3,4 , {z:1}]))

function somaR(n) {
  if (n === 1) {
    return 1
  }
  return n + somaR(n - 1)
}
console.log(somaR(5))





//Timeout das coisas BEM ÚTIL





function time(num) {
  return new Promise(resolve => setTimeout(() => resolve(num), 1000))
}

async function conta(num) {
  if (num <= 0) {
    return console.log('feliz ano novo')
  }
  
  console.log(await time(num))
  
  return conta(num -1)
}

conta(10)

function fatorial(n) {
  if (n === 1) {
    return 1
  }
  return n * fatorial(n - 1)
}
console.log(fatorial(5))





// CARRYiNG


let resultado

function ehmaior(a,b) {
  return a > b
}

resultado = ehmaior(2,5)

console.log(resultado)

let resultado

function ehmaiorclosu(a) {
  return function (b) {
    return a > b
  }
}

resultado = ehmaiorclosu(2)(5)

console.log(resultado)

//freese deixa o obj parado
//seal adicionar valores (atribuir)