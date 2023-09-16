// Andres facundo- santiago henao

function calcular(salario, monto) {
    var salarioMinimo = 1000000; //salario mínimo
    var interes = 0;
  
    if (salario >= 2 * salarioMinimo && salario <= 3 * salarioMinimo) {
      'Interés del 1.1'
      interes = monto * 0.011;
    } else if (salario < salarioMinimo) {
      'Descuento del 10%'
      interes = -monto * 0.1;
    } else if (salario > 4 * salarioMinimo) {
      'Interés del 2%'
      interes = monto * 0.02;
    }
  
    return interes;
  }
  
  'Ejemplo de uso'
  var salarioEmpleado = 2500000; 'Salario del empleado (2.5 salarios mínimos)'
  var montoSolicitado = 5000000;  'Monto solicitado del préstamo'
  
  var interesCalculado = calcular(salarioEmpleado, montoSolicitado);
  console.log("El interés calculado es:", interesCalculado);