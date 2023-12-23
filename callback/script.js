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