function identity(arg) {
    return arg;
}
var output1 = identity("Hola");
console.log("Output 1: " + output1);
var output2 = identity(42);
console.log("Output2: ", output2);
var Caja = /** @class */ (function () {
    function Caja(contenido) {
        this.contenido = contenido;
    }
    Caja.prototype.obtenerContenido = function () {
        return this.contenido;
    };
    return Caja;
}());
var cajaDeString = new Caja("Libros");
console.log("Contenido de la caja de string:", cajaDeString.obtenerContenido());
