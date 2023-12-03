let num=8
let multi=0;

function multiplicar(){

if(!isNaN(num)){
while(multi<=9){

multi++
let op=num*multi

console.log(`${num}x${multi}=${op}`);

}}else if(isNaN(num)){

console.log("Valor invalido")

}
} multiplicar();