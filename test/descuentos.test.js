
const assert = require("assert");
const {
  calcularTotal,
  calcularPrecioFinal
} = require("../src/descuentos");

// Pruebas originales
assert.strictEqual(calcularTotal(100, 20), 80);
assert.strictEqual(calcularTotal(50, 0), 50);

// Pruebas del descuento para estudiantes
assert.strictEqual(calcularPrecioFinal(10000, "estudiante"), 8500);
assert.strictEqual(calcularPrecioFinal(20000, "estudiante"), 17000);

// Prueba para cliente normal
assert.strictEqual(calcularPrecioFinal(10000, "normal"), 10000);

console.log("Tests ejecutados correctamente");
