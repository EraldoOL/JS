console.log('Ola,mundo');

const string = "1234"
const valorNumber= Number(string)

console.log(typeof valorNumber)


const minhaString = "JavaScript é incrível"
const numeroCarac = minhaString.length
const numeroPalavra = minhaString.split(" ").length;

console.log(`o número de carac é:` +numeroCarac);
console.log('o número de palavras é:' +numeroPalavra)

const nomes= ["Ana", "João", "Carlos", "Maria", "Beatriz"]

for (let i = 0; i < nomes.length; i++){
  console.log(nomes[i]);
}

function converterHorario(horario24){
  const hora = horario24.split(":")[0]
  const minuto = horario.split(":")[1]
  console.log(hora, minuto)
}
converterHorario("15:16");
