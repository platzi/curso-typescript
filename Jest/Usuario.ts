export class Usuario {
    nombre: string;
    email: string;
    profesion :string;
    trayectoria : number;
    estaActivo : boolean;

    constructor(nombre: string, email: string, profesion :string, trayectoria : number, estaActivo : boolean){
        this.nombre = nombre;
        this.email = email;
        this.profesion = profesion;
        this.trayectoria = trayectoria;
        this.estaActivo = estaActivo;
    }

    getName(): string {
        return this.nombre;
    }

    getProfile(): string {
        return `El usuario es ${this.nombre}, se dedica a ${this.profesion} y tiene ${this.trayectoria} años de experiencia.`;
    }

    isStillActive(): boolean {
        console.log(this.estaActivo);
        return this.estaActivo;
    }
}
