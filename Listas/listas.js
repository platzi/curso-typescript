var nombres = ["Amin", "Marce", "Miranda"];
console.log("Nombres:", nombres);
var edades = [39, 25, 30];
console.log("Edades:", edades);
var mixto = ["Amin", 39, true];
console.log("Mixto:", mixto);
var personas = [
    { nombre: "Amin", edad: 39, esDesarrollador: true },
    { nombre: "Juan", edad: 25, esDesarrollador: false },
    { nombre: "Maria", edad: 30, esDesarrollador: true }
];
personas.push({ nombre: "Miranda", edad: 30, esDesarrollador: true });
console.log("Personas:", personas);
//Tupla
var persona;
persona = ["Amin", 39, true];
console.log("Persona:", persona);
var personasTupla = [];
personasTupla.push(["Amin", 39, true]);
personasTupla.push(["Marce", 40, true]);
personasTupla.push(["Miranda", 7, false]);
personasTupla.forEach(function (persona) {
    console.log("Persona:", persona);
    var nombre = persona[0];
    var edad = persona[1];
    var esDesarrollador = persona[2];
    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
    console.log("Es desarrollador:", esDesarrollador);
});
// Enumeradores
var DiaDeLaSemana;
(function (DiaDeLaSemana) {
    DiaDeLaSemana[DiaDeLaSemana["Lunes"] = 0] = "Lunes";
    DiaDeLaSemana[DiaDeLaSemana["Martes"] = 1] = "Martes";
    DiaDeLaSemana[DiaDeLaSemana["Miercoles"] = 2] = "Miercoles";
    DiaDeLaSemana[DiaDeLaSemana["Jueves"] = 3] = "Jueves";
    DiaDeLaSemana[DiaDeLaSemana["Viernes"] = 4] = "Viernes";
    DiaDeLaSemana[DiaDeLaSemana["Sabado"] = 5] = "Sabado";
    DiaDeLaSemana[DiaDeLaSemana["Domingo"] = 6] = "Domingo";
})(DiaDeLaSemana || (DiaDeLaSemana = {}));
var dia = DiaDeLaSemana.Domingo;
console.log("Dia:", DiaDeLaSemana[dia]);
