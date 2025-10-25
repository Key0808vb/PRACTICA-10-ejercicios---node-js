// Ejercicio 1: 
//Crea una función llamada crearMultiplicador(base) que devuelva una nueva función. 
//Esa función interna debe recibir un número y devolver el resultado de multiplicarlo por la base. 
//Por ejemplo, si base = 3 y el número es 5, el resultado debe ser 15.

function crearMultiplicador(base) {
  return function (numero) {
    return base * numero;
  };
}

// Ejemplo practico:
const multiplicarPor3 = crearMultiplicador(3);
console.log(multiplicarPor3(5)); // Resultado: 15
console.log(multiplicarPor3(10)); // Resultado: 30
console.log(multiplicarPor3(8)); // Resultado: 24
console.log(multiplicarPor3(4)); // Resultado:12
console.log(multiplicarPor3(9)); // Resultado:27
