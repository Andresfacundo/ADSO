//Define una variable llamada 'edad'(numero)
// si es mayor de edad true
// si es menor de edad false

// let edad = 20;
console.log(edad >= 18);

// _________________________________________________________

//Define una variable llamada 'number'(numero)
// si el numero es impar true
// en cualquier otro caso false

let number = 3;
console.log((number % 2) == 1);//Si el residuo de dividir un numero entre 2 es 1
    //Es decir el residuo de los numeros impares sera 1

// _______________________________________________________
nombre = 'andres'

console.log('hola mundo me llamo ' + nombre + ' y tengo '.length);

// para obtener la propiedad de un string usamos la propiedad .length
// _______________________________________________________

// para sacar la longitud de una string, simplemente 
// ponemos .length despues de la string asi la string
// este dentro de una variable

let nombre1 = 'andres'; //6
let nombre2 = 'paola'; //5

let logitudNombre1 = nombre1.length
let longitudNombre2 = nombre2.length

console.log(logitudNombre1 > longitudNombre2);
// _____________________________________________________

// para invertir el valor de un booleano usamos el operador
// logico (NOT (!))

// console.log(true);// es true
// console.log(!true);// es false
// console.log(false);// es false
// console.log(!false);// es true

let numerox = 123;
let numeroz = 123;

let sonIguales = numerox == numeroz;
let sonDiferentes = !sonIguales;

console.log(sonIguales);

//operador logico '&&' 'y' en español y solos si
// los dos se cumplen, se cumple el and '&&'

//  Solo devolvemos true cuando hay true && true 
//  en cualquier otro caso es false

// console.log(false && false);// false
// console.log(false && true);// false
// console.log(true && false);//false
// console.log(true && true);// true

//operador logico 'or' en español 'o' '||' una cosa o otro cosa
// console.log(false || false);//false
// console.log(false || true);//true
// console.log(true || false);//true
// console.log(true || true);//true

//Simplemente si uno de los dos se cumple, ya se cumple todo


// let estaLloviendo = true;
// let haceFrio = false;


console.log(estaLloviendo && haceFrio);// para que el valor sea true tienen que cumplirse las dos condiciones

console.log(estaLloviendo || haceFrio);//para que el valor sea true con que se cumpla 1 valor es true

// crea dos variables booleanas
// (estaLloviendo) y (hayViento)
// true si esta lloviendo pero no hay viento
// false en cualquier otro caso
 
// let estaLloviendo = true;
// let haceViento =false;

console.log(estaLloviendo && !haceViento);

// crea dos variables nombre 'string' y edad 'number'
// si el nombre de la persona es juan, true
// si el nombre de la persona no es juan pero su edad es un numero par, true
// o en cualquier otro cas, false

// let nombre = 'paola';
let edad = 22;

console.log((nombre == 'paola')
 || edad % 2==1);
//si se cumple una de las 2 condiciones con el valor '||' es true, de lo contrario es false
// __________________________________________________________

// CONDICIONALES
// let tieneUnPerro = true;

if(tieneUnPerro){
    console.log('ahora si tiene un perro');

}
if(!tieneUnPerro){
    console.log('ahora no tiene perro');

}
// _______________________________________________________

// let numero = 7;

if(numero == 2){// si esta condicion se cumple
    console.log('Dos');// me imprime en pantalla 'dos'
}
else if(numero == 3){//Si el numero no es dos
    console.log('tres');//entonces me imprime 'tres'
}
else{
    console.log('Ninguno de las anteriores');}//si no se cumple ninguno de los casos

//_________________________________________________________

let respuesta = '2'

if(respuesta == 'si' ){
    console.log('nos ha respondido si');
}else if(respuesta == 'no'){
    console.log('nos ha respondido no');
}else{
    console.log('no hemos entendido la respuesta');
}
//_________________________________________________________

let nombre = 'patatas'
let cantidad = 2

let precioProducto

if(nombre == 'refresco'){
    precioProducto = 1.00;
}else if(nombre == 'cerveza'){
    precioProducto = 2.00;
}else if(nombre == 'patatas'){  
    precioProducto = 5.00;
}
let precioTotal = cantidad * precioProducto

console.log('tiene que pagar ' + precioTotal + ' euros ');

// __________________________________________________________
// Ejercicio de condicional anidado: Escribe un programa que solicite
// al usuario ingresar un número y luego verifique si ese número es 
// divisible por 2 y por 3

let numero = 1

if(numero % 2 === 0){
    if(numero % 3 ===0){
        console.log('el numero es divisible por 2 y por 3');
    }
else{
    console.log('el numero es divisible solo por 2');
}
}

else if(numero % 3 ===0){
    console.log('el numero es divisible solo por 3');
}else{
    console.log('el numero no es divisible ni por 2 ni por 3');
}

//_____________________________________________________
// crear una calculadora para comprobar si un año es bisiesto
// o no.las condiciones a cumplir de un año bisiesto son que
// es divisible por 4
// no es divisible por 100 o es divisible por 400
// finalmente se debe printar por pantalla si es bisiesto o no

let año = 2000;

if(año % 4 === 0){

    let divisiblePor100 = año % 100 === 0;
    let divisiblePor400 = año % 400 === 0;

    if(!divisiblePor100 || divisiblePor400){
        console.log('El año Si es bisiesto');
    }else{
        console.log('El año No es bisiesto');
    }
    }
//______________________________________________________________________

let esSocio = true;
let ticket = 300;

if(esSocio){
    if(ticket >= 100){
        ticket = ticket - 15;
    }
    else if(ticket >= 50){
        ticket = ticket * 0.95;   
    }
    else if(ticket >= 25){
        ticket = ticket -1;
    }
}else{
    if(ticket >= 100){
        ticket = ticket - 5
    }
}console.log('El precio final del tique es ' + ticket + ' euros');

//______________________________________________________________________


