



let x = 10;
const y = 30;
console.log(typeof x);

console.log(x + y);

//operadores de comparação 

console.log(x == y);
console.log(x != y)
console.log('5' == 5);
console.log("5" === 5)
console.log("5" !== 5)

// operadores logicos AND(&&) OR ||

console.log(10 > 5 && 20 > 5)
console.log(10 > 5 && 20 < 5)

console.log(10 > 5 || 20 > 5)
console.log(10 < 5 || 20 < 5)

//conversão de tipos
const meuNumero = "123"

const meuNumeroconvertido = Number(meuNumero)

console.log(meuNumeroconvertido)
console.log(typeof meuNumeroconvertido)

//estrutura de condição  if, else, else if

const idade = 21

if(idade < 13){
  console.log("criança")
} else if (idade < 20){
  console.log("adolescente")
} else {
  console.log("adulto")
}

//switch
const fruta = "banana"

switch(fruta){
   case "banana":
   console.log("Banana é a fruta");
   break;
   case "Maçã":
     console.log("Maçã é a fruta");
     break;
     default:
     console.log("fruta não encontrada")
}


// estrutura de repeitao


for(let i = 0; i < 5; i++){
  console.log("o valor é " + i)
  
}

//while
let i = 0;

while(i < 5){
  console.log(" o valor e " +i)
  i++;
  
}
let j = 0
do{
  
  console.log("o valor é " + j)
  j++
}while(j < 5);


//funções 

function comprimentar(nome){
  console.log("Olá " + nome)
}

comprimentar("eraldo");

//escopo de variáveis
let cor = "azul";

function mostrarCor(){
  let cor = "verde";
  
  console.log(cor)
}

console.log(cor);

mostrarCor();


//hoisting
testeHoisting();

function testeHoisting(){
  console.log("Deu tudo Certo")
}

//arow function
const testeArrow = () => console.log(" isso tabem é uma função ");
testeArrow();

//truthy e falsy
const minhaVariavel = ""
const minhaVariavel2 = "algum"

if (minhaVariavel){
  console.log("verdadeiro ")
  
} else {
  console.log("E falso")
}

if (minhaVariavel2){
  console.log("verdadeiro 2")
  
} else {
  console.log("E falso 2")
}

// aray,listas
const numeros = [1, 2, 3, 4, 5];

console.log(numeros);

console.log(numeros[0]);

numeros.push(6);
console.log(numeros)

//prototype => obejeto -> obejeto2

numeros.pop();
console.log(numeros)

//strings
const minhaStringNova = "olá, Mundo"

const minhaStrinh3 = minhaStringNova + "como vc estar"

console.log(minhaStrinh3)

//interpolação
const minhaString4 = '${minhaStringNova} como vc estar';~
console.log(minhaString4);

console.log(minhaStringNova.length);
console.log(minhaStringNova[5]);
console.log(minhaString4.toUpperCase());

//data e hora

const agr = Date();
console.log(agr);

const natal = new Date(2023, 11, 25);
console.log(natal);

//math
console.log(Math.PI);

console.log(Math.round(3.6));

console.log(Math.sqrt(16));

console.log(Math.pow(2, 3));