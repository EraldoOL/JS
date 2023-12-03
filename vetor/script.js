let num = [5,8,2,9,3]
num.sort()
num.push(1)
console.log(num)
console.log(`O vetor te ${num.length} posições`)
console.log(`primeiro ${num[1]}`)



for ( let pos=0; pos < val.length;pos++){
  console.log(val[pos])
}
let val =[8,1,7,4,2,9]
val.sort()
for(let pos in val){
  console.log(val[pos])
}
let num = val.indexOf(10)
if ( num == -1){
  console.log(' o valor n foi encontrado ')
}else{
  console.log(`${num}`)
}
