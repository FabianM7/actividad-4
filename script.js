let base = parseFloat(prompt("Ingrese la base:"));
let exponente = parseFloat(prompt("Ingrese el exponente:"));

let resultado = Math.pow(base, exponente); // También se puede usar "base ** exponente"

let mensaje = "El resultado obtenido es " + resultado;
console.log(mensaje);
