import { Empleado } from "./empleado";

let empleado = new Empleado("Amin", 39, true, "Desarrollador Senior");

console.log(empleado.saludar());
console.log(empleado.obtenerInfo());

console.log("Nombre:", empleado.nombre);