function saludar(nombre, saludo) {
    if (saludo) {
        return "".concat(saludo, ", ").concat(nombre, "!");
    }
    else {
        return "Hola, ".concat(nombre, "!");
    }
}
console.log(saludar("Amin"));
console.log(saludar("Amin", "Buenos días"));
//Parámetros múltiples
function sumarTodos() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (acumulado, actual) { return acumulado + actual; }, 0);
}
console.log("Resultado de sumar todos:", sumarTodos(1, 2, 3, 4, 5));
//Valores por defecto
function despedir(nombre, despedida) {
    if (despedida === void 0) { despedida = "Adiós"; }
    return "".concat(despedida, ", ").concat(nombre, "!");
}
console.log(despedir("Amin"));
console.log(despedir("Amin", "Hasta luego"));
