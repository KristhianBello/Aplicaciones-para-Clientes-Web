function calcular(operacion) {
  // Obtener los valores de los inputs
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  
  // Verificar si ambos valores son números
  if (isNaN(num1) || isNaN(num2)) {
      mostrarResultado("Por favor, introduce valores numéricos válidos.");
      return;
  }

  // Realizar la operación seleccionada
  let resultado;
  switch (operacion) {
      case 'suma':
          resultado = num1 + num2;
          break;
      case 'resta':
          resultado = num1 - num2;
          break;
      case 'multiplicacion':
          resultado = num1 * num2;
          break;
      case 'division':
          if (num2 === 0) {
              mostrarResultado("No se puede dividir por cero.");
              return;
          }
          resultado = num1 / num2;
          break;
      case 'modulo':
          if (num2 === 0) {
              mostrarResultado("No se puede dividir por cero.");
              return;
          }
          resultado = num1 % num2; // Operación de módulo
          break;
      default:
          mostrarResultado("Operación no válida.");
          return;
  }

  // Mostrar el resultado
  mostrarResultado("El resultado de la " + operacion + " es: " + resultado);
}

// Función para mostrar el resultado en el div
function mostrarResultado(mensaje) {
  document.getElementById('resultado').innerText = mensaje;
}
