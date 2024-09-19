// Definir los dos valores a operar
let valor1 = 10;
let valor2 = 5;

for (let i = 1; i <= 5; i++) {
  switch (i) {
    case 1:
      console.log(`Iteración ${i}: Suma = ${valor1 + valor2}`);
      break;
    case 2:
      console.log(`Iteración ${i}: Resta = ${valor1 - valor2}`);
      break;
    case 3:
      console.log(`Iteración ${i}: Multiplicación = ${valor1 * valor2}`);
      break;
    case 4:
      if (valor2 !== 0) {
        console.log(`Iteración ${i}: División = ${valor1 / valor2}`);
      } else {
        console.log(`Iteración ${i}: División no es posible (división entre 0)`);
      }
      break;
    case 5:
      console.log(`Iteración ${i}: Módulo = ${valor1 % valor2}`);
      break;
  }
}
