// Dados dos números enteros, determine si estos son ambos impares
// mútiplos de 3
// Andres facundo- santiago henao
function impares_multiplos(numero1, numero2){
if(numero1 % 2 !== 0 && numero1 % 3 === 0 && numero2 % 2 !== 0 && numero2 % 3 === 0){
console.log("Ambos son son impares y multiplos de 3 ");
return true;
}else console.log("Ninguno es impar y multiplo de 3");
return false;
}impares_multiplos(2, 6)

