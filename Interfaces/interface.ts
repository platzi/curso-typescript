interface Persona {
    nombre: string;
    edad: number;
    esDesarrollador: boolean;
}

let persona: Persona = {
    nombre: "Amin",
    edad: 39,
    esDesarrollador: true
};

console.log("Persona:", persona);

let personas: Persona[] = [
    { nombre: "Amin", edad: 39, esDesarrollador: true },
    { nombre: "Juan", edad: 25, esDesarrollador: false },
    { nombre: "Maria", edad: 30, esDesarrollador: true }
];

console.log("Personas:", personas);

interface Sumar {
    (a: number, b: number): number;
}

let sumar: Sumar = (a: number, b: number): number => {
    return a + b;
};

console.log("Resultado de sumar:", sumar(5, 3));
