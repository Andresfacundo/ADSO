// Juan necesita calcular su nota final, que es el promedio de 3 notas
// que pueden estar entre 1 y 5, de tal modo que:
// ● Si saca menos de 3.5 habrá perdido la materia.
// ● si saca entre 3.5 y 4.5 habrá ganado la materia
// ● Si saca más de 4.5 recibirá un mensaje de felicitación
// NOTA: Si su nota quedó entre 2 y 3.4, el estudiante podrá
// recuperar, lo cual da pie a que le informes por medio de un
// mensaje
// Andres facundo- santiago henao


'Ejemplo de uso' 
  var nota1 = 4.0;
  var nota2 = 4.5;
  var nota3 = 3.0;

function calcularNotaFinal(nota1, nota2, nota3) {
    var promedio = (nota1 + nota2 + nota3) / 3;
    if (promedio < 3.5) {
      return "reprobaste la materia  Tu nota final es: " + promedio.toFixed(2);
    } else if (promedio >= 3.5 && promedio <= 4.5) {
      return "¡Ganaste la materia! Tu nota final es: " + promedio.toFixed(2);
    } else {
      return "¡Felicidades! Fuiste el mejor Tu nota final es: " + promedio.toFixed(2);
    }
  }
  var mensaje = calcularNotaFinal(nota1, nota2, nota3);
  console.log(mensaje);

