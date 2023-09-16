// Andres felipe facundo sanchez 493

// 1. Realiza un programa que solicite al usuario el precio de un producto y su rango. Si su
// rango está entre 1 y 3 aplica un descuento del 10% al precio; si su rango está entre 4 y 6,
// el descuento será del 20%; si es mayor a 10, muestra un mensaje de error. Finalmente,
// muestra el precio final con el descuento aplicado.

// Solicitar al usuario el precio del producto y su rango
// const precio = parseFloat(prompt("Ingrese el precio del producto:"));
// const rango = parseInt(prompt("Ingrese su rango (de 1 a 10):"));

// // Verificar el rango y aplicar el descuento correspondiente
// let descuento = 0;
// if (rango >= 1 && rango <= 3) {
//   descuento = 0.1; // 10% de descuento
// } else if (rango >= 4 && rango <= 6) {
//   descuento = 0.2; // 20% de descuento
// } else if (rango > 10) {
//   alert("Error: El rango debe ser menor o igual a 10.");
// } else {
//   alert("Error: Rango inválido.");
// }

// // Calcular el precio final con descuento
// const precioFinal = precio - (precio * descuento);

// // Mostrar el precio final y el descuento aplicado si no hubo errores
// if (descuento !== 0) {
//   alert("Precio final: $" + precioFinal.toFixed(2));
//   alert("Descuento aplicado: " + (descuento * 100) + "%");
// }

// 2. Escribe un programa que solicite al usuario una contraseña. Si la longitud de la
// contraseña es menor o igual a 6 caracteres, muestra un mensaje de error. Si la longitud
// está entre 7 y 12 caracteres, muestra un mensaje indicando que la contraseña es de
// longitud media. Si la longitud es mayor a 12 caracteres, muestra un mensaje indicando
// que la contraseña es segura.

// let contrasena = prompt("Ingrese su contraseña: ");

// if (contrasena.length <= 6) {
//     alert("Error: La contraseña es demasiado corta.");
// } else if (contrasena.length >= 7 && contrasena.length <= 12) {
//     alert("La contraseña tiene una longitud media.");
// } else {
//     alert("La contraseña es segura.");
// }

// 3. Desarrolla un programa que genere un número aleatorio entre 1 y 100, y luego le pida al
// usuario que adivine el número. Si el número ingresado es mayor al generado, muestra un
// mensaje indicando que el número es demasiado alto. Si el número ingresado es menor,
// muestra un mensaje indicando que el número es demasiado bajo. Si el número ingresado
// es igual al generado, muestra un mensaje de felicitaciones.

// let numeroGenerado = Math.floor(Math.random() * 100) + 1;

// let adivinanza = parseInt(prompt("Adivina el número (entre 1 y 100):"));

// if (adivinanza > numeroGenerado) {
//     alert("El número es demasiado alto.");
// } else if (adivinanza < numeroGenerado) {
//     alert("El número es demasiado bajo.");
// } else {
//     alert("¡Felicidades! Adivinaste el número.");
// }

// 4. Realiza una función dado un array de n elementos retorne los números del mismo,
// ordenados de manera descendente.Recuerda que debes usar ciclos y no métodos nativos
// del lenguaje.

// function ordenarDescendente(array) {
//   var n = array.length;

//   for (var i = 0; i < n; i++) {
//     for (var j = i + 1; j < n; j++) {
//       if (array[i] < array[j]) {
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//     }
//   }

//   return array;
// }
// var numeros = [25, 15, 45, 10, 80];
// var numerosOrdenados = ordenarDescendente(numeros);
// console.log("Números ordenados de manera descendente:", numerosOrdenados);




// 5. Dada como entrada un Array de números, imprime la suma de los números impares que
// haya en él.

// function sumaNumerosImpares(array) {
//   var suma = 0;

//   for (var i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       suma += array[i];
//     }
//   }

//   return suma;
// }
// var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var sumaImpares = sumaNumerosImpares(numeros);
// console.log("La suma de los números impares es: " + sumaImpares);
// function sumaNumerosImpares(array) {
//   var suma = 0;
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       suma += array[i];
//     }
//   }
//   return suma;
// }
// function sumaPares(array) {
//   var suma = 0;

//   for (var i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 1) {
//       suma += array[i];
//     }
//   }

//   return suma;
// }
// var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var sumaPares = sumaPares(numeros);
// console.log("La suma de los números Pares es: " + sumaPares);
// function sumaPares(array) {
//   var suma = 0;

//   for (var i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 1) {
//       suma += array[i];
//     }
//   }
//   return suma;
// }


// 6. Dado como entrada un número entero, retorna true si el número es primo o false si no lo
// es.


// function esPrimo(numero) {
//   if (numero < 2) {  // Los números menores a 2 no son primos
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(numero); i++) {
//     if (numero % i === 0) {  // Si el número es divisible por algún otro número, no es primo
//       return false;
//     }
//   }
//   return true;
// }

// // Ejemplo de uso
// let numero = parseInt(prompt("Ingrese un número entero: "));
// if (esPrimo(numero)) {
//   alert(numero + " es primo.");
// } else {
//   alert(numero + " no es primo.");
// }

// 7.Realiza un programa pidiéndole al usuario un número, en caso de que este sea mayor a
// 100 o que no sea un entero solicite de nuevo el número, caso contrario, retorna su
// número factorial.


// function factorial(numero) {
//   if (numero === 0 || numero === 1) {
//     return 1;
//   } else {
//     return numero * factorial(numero - 1);
//   }
// }

// function obtenerNumeroFactorial() {
//   let numero = prompt("Ingrese un número entero: ");
//   numero = parseInt(numero);

//   while (numero > 100 || isNaN(numero) || !Number.isInteger(numero)) {
//     numero = prompt("Número inválido. Ingrese un número entero menor o igual a 100: ");
//     numero = parseInt(numero);
//   }

//   let resultado = factorial(numero);
//   return resultado;
// }

// let resultadoFactorial = obtenerNumeroFactorial();
// alert("El factorial del número ingresado es: " + resultadoFactorial);

// 8. Dado como entrada un arreglo de números, retorne como valor la mitad de la sumatoria
// de cada uno de sus elementos. Es importante anotar, que solo se tendrán en cuenta los
// números pares.

// function sumatoriaMitadPares(arreglo) {
//   let sumatoria = 0;

//   for (let i = 0; i < arreglo.length; i++) {
//     if (arreglo[i] % 2 === 0) {  
//       sumatoria += arreglo[i];
//     }
//   }

//   return sumatoria / 2;
// }


// let numeros = [1, 2, 3, 4, 5, 6];
// let resultado = sumatoriaMitadPares(numeros);
// console.log("La mitad de la sumatoria de los números pares es: " + resultado);



















