export class Persona {
    nombre: string;
    edad: number;
    esDesarrollador: boolean;

    constructor(nombre: string, edad: number, esDesarrollador: boolean) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
    }

    saludar(): string {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}