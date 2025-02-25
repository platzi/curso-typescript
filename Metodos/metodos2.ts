function saludar(nombre: string, saludo?: string): string {
    if (saludo) {
        return `${saludo}, ${nombre}!`;
    } else {
        return `Hola, ${nombre}!`;
    }
}

console.log(saludar("Amin")); 
console.log(saludar("Amin", "Buenos días"));

//Parámetros múltiples
function sumarTodos(...numeros: number[]): number {
    return numeros.reduce((acumulado, actual) => acumulado + actual, 0);
}

console.log("Resultado de sumar todos:", sumarTodos(1, 2, 3, 4, 5));

//Valores por defecto
function despedir(nombre: string, despedida: string = "Adiós"): string {
    return `${despedida}, ${nombre}!`;
}

console.log(despedir("Amin")); 
console.log(despedir("Amin", "Hasta luego"));