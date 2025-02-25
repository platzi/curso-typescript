function imprimeMensaje(message: string): void {
    console.log(message);
}

imprimeMensaje("Hola, soy un mensaje");

function sumar(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

let resultado : number = sumar(5, 10);

console.log(`Tu resultado es: ${resultado}`); 