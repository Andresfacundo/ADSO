/*Qué elemento hay en la posición 3 del array: [1,5,6,3,8,9];
2. ¿En qué posición se encuentra la manzana? ['orange','apple','banana','leemon','strawberry'];
3. ¿Cuál es la dimensión del siguiente Array? [1,4,5,6,7,8,4,5,6,3,2,1];
4. ¿Qué hay en el array en la posición [4][4];
Comprobar en javascript:
[1,23,5,6,[1,3,5],""]
5. Realiza un programa que retorne la suma de todos los elementos del arreglo: [1,4,5,6,7,8,4,5,6,3,2,1];
6. Elimina la banana del arreglo: ['orange','apple','banana','leemon','strawberry'];
7. Realiza un programa que retorne la suma de los números pares del siguiente array: [1,4,5,6,7,8,4,5,6,3,2,1];
8. Realice un programa que retorne la cantidad de elementos de un array.
9. Realice un programa que retorne cuántos números primos hay en el siguiente array:
[7,9,10,11,12,15,16,18,20]  */

//1.Qué elemento hay en la posición 3 del array: [1,5,6,3,8,9];
//let numbers =  [1,5,6,3,8,9];
//console.log(numbers[3]);

//2. ¿En qué posición se encuentra la manzana? ['orange','apple','banana','leemon','strawberry'];

//3. ¿Cuál es la dimensión del siguiente Array? [1,4,5,6,7,8,4,5,6,3,2,1];

//let array = [1,4,5,6,7,8,4,5,6,3,2,1];
//console.log(array.length);

//4. ¿Qué hay en el array en la posición [4][4];

//6. Elimina la banana del arreglo: ['orange','apple','banana','leemon','strawberry'];


//let array = ['orange','apple','banana','leemon','strawberry'];
//array.splice(2, 1);
//console.log(array);


function contarElementos(array) {
    return array.length;
  }
  
  // Ejemplo de uso
  let miArray = [1, 2, 3, 4, 5];
  let cantidad = contarElementos(miArray);
  console.log("La cantidad de elementos en el array es:", cantidad);

  