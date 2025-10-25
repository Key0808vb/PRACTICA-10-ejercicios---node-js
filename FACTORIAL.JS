// Ejercicio 2: 
//Crea una función recursiva llamada factorial que calcule el factorial de un número. El factorial de un número n se calcula multiplicando todos los números desde 1 hasta n. 
//Por ejemplo, factorial(5) debe devolver 120.

function factorial(n) {
  if (n < 0) return "El factorial no está definido para números negativos.";
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Ejemplo PRÁCTICO:
console.log(factorial(5)); // Resultado: 120
console.log(factorial(0)); // Resultado: 1
console.log(factorial(4)); // Resultado: 24
console.log(factorial(6)); // Resultado: 720
console.log(factorial(1)); // Resultado: 1
