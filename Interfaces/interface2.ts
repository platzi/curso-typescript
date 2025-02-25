interface Direccion {
    calle: string;
    numero: number;
    ciudad?: string;
}

let direccion: Direccion = {
    calle: "Calle Falsa",
    numero: 123,
    ciudad: "Springfield"
};

console.log(direccion);

//Read only
interface Persona {
    readonly nombre: string;
    readonly edad: number;
    readonly esDesarrollador: boolean;
}

let personaRead: Persona = {
    nombre: "Amin",
    edad: 39,
    esDesarrollador: true
};

console.log("Persona:", personaRead);

//esto te va a causar un error
//personaRead.nombre = "Marce";

//Interfaz extendida
interface Empleado extends Persona {
    readonly puesto: string;
}

let empleadoRead: Empleado = {
    nombre: "Amin",
    edad: 39,
    esDesarrollador: true,
    puesto: "Desarrollador Senior"
};

console.log("Empleado:", empleadoRead);