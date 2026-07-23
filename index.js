
function solicitarNumero(mensaje) {
  let num;
  do {
    let entrada = prompt(mensaje);
    num = Number(entrada);
    // Verificamos si la entrada es nula, vacía o texto
    if (entrada === null || entrada.trim() === "" || isNaN(num)) {
      alert("Por favor, ingresa un número válido.");
    } else {
      break;
    }
  } while (true);
  return num;
}

const num1 = solicitarNumero("Ingresa el primer número:");
const num2 = solicitarNumero("Ingresa el segundo número:");
const num3 = solicitarNumero("Ingresa el tercer número:");

// Verificamos si todos los números son exactamente iguales
if (num1 === num2 && num2 === num3) {
  console.log(`Los números son iguales: ${num1}, ${num2}, ${num3}`);
  
  document.body.innerHTML += `<p><strong>Resultado:</strong> Los números son iguales (${num1}, ${num2}, ${num3}).</p>`;
} else {
  
  const numeros = [num1, num2, num3];

  const mayorAMenor = [...numeros].sort((a, b) => b - a);
  
  const menorAMayor = [...numeros].sort((a, b) => a - b);

  // Identificar el mayor, centro y menor
  const mayor = mayorAMenor[0];
  const centro = mayorAMenor[1];
  const menor = mayorAMenor[2];

console.log("RESULTADOS ");
  console.log(`Número Mayor: ${mayor}`);
  console.log(`Número del Centro: ${centro}`);
  console.log(`Número Menor: ${menor}`);
  console.log(`Orden Mayor a Menor: ${mayorAMenor.join(", ")}.`);
  console.log(`Orden Menor a Mayor: ${menorAMayor.join(", ")}.`);

}