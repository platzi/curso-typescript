var variableAny;
//variableAny = "Hello";
variableAny = 42;
//variableAny = true;
console.log("Valor de variable any " + variableAny);
var variableDesconocida;
//variableDesconocida = "Hello";
variableDesconocida = 42;
//variableDesconocida = true;
if (typeof variableDesconocida === "string") {
    console.log("Variable unknown is a string:", variableDesconocida);
}
/*function throwError(message: string): never {
    throw new Error(message);
}

throwError("Este es un error");*/
function logMessage(message) {
    console.log("Log message:", message);
}
logMessage("Este es un mensaje de log");
