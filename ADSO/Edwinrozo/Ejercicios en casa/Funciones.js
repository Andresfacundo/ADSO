function saludar(nombre){  //Se crea la funcion y se le asigna nombre
     console.log(`Hola ${nombre}`); //para usar expresiones dentro de la cadena de caracteres `` caracter backtick
}
saludar('andres'); //se llama la funcion 

console.log('JavaScript es muy bueno');

setTimeout(() => {
     console.log('Este mensaje se mostrara pasados 5 segundos', 5000);     
});

console.log('Fin');
// ---------------------------------------------------

// suma de dos numeros
function sumar(a, b){    //le damos nombre a la funcion y agregamos parametros
     let suma = a + b; //se agrega la variable con el nombre suma asignandole el metodo suma 
     return suma;
}
console.log(sumar(2, 3));
//--------------------------------------------------

// Crear una función que tome un número como parámetro y devuelva 
// "Positivo" si es mayor a cero, "Negativo" si es menor a cero, o 
// "Cero" si es igual a cero.

function verificarnumero(numero){
     if(numero > 0){
          return 'positivo';
     }else if(numero < 0){
          return 'negativo';
     }else{
          return 'igual a cero';
     }
}
console.log(verificarnumero(120));
// ___________________________________________________________________

// Crear una función que tome un número como parámetro y devuelva el 
// factorial de ese número.

function factorial(numero){
     let resultado = 1;
     for(let i = 1; i <= numero; i++){
          resultado *= i;
     }
         
     return resultado;
}
console.log(factorial(5));









