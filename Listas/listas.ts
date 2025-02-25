let nombres: string[] = ["Amin", "Marce", "Miranda"];
console.log("Nombres:", nombres);

let edades: number[] = [39, 25, 30];
console.log("Edades:", edades);

let mixto: any[] = ["Amin", 39, true];
console.log("Mixto:", mixto);

interface Persona {
    nombre: string;
    edad: number;
    esDesarrollador: boolean;
}

let personas: Persona[] = [
    { nombre: "Amin", edad: 39, esDesarrollador: true },
    { nombre: "Juan", edad: 25, esDesarrollador: false },
    { nombre: "Maria", edad: 30, esDesarrollador: true }
];

personas.push({ nombre: "Miranda", edad: 30, esDesarrollador: true });

console.log("Personas:", personas);

//Tupla
let persona: [string, number, boolean];
persona = ["Amin", 39, true];

console.log("Persona:", persona);


let personasTupla: [string, number, boolean][] = [];

personasTupla.push(["Amin", 39, true]);
personasTupla.push(["Marce", 40, true]);
personasTupla.push(["Miranda", 7, false]);

personasTupla.forEach(persona => {
    console.log("Persona:", persona);

    let nombre: string = persona[0];
    let edad: number = persona[1];
    let esDesarrollador: boolean = persona[2];

    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
    console.log("Es desarrollador:", esDesarrollador);
});

// Enumeradores
enum DiaDeLaSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}

let dia: DiaDeLaSemana = DiaDeLaSemana.Lunes;
console.log("Dia:", DiaDeLaSemana[dia]);
