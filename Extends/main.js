var nombre = "Amin Espinoza de los Monteros";
console.log(nombre.length);
function obtenerLongitud(obj) {
    var longitud = obj.length;
    var tipo = typeof obj;
    console.log("El tipo de dato es: ".concat(tipo, " y la longitud es: ").concat(longitud));
    return obj.length;
}
console.log(obtenerLongitud("Hola"));
console.log(obtenerLongitud([1, 2, 3, 4, 5]));
//console.log(obtenerLongitud(42));
