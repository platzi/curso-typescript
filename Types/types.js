/*
  El mapped type de PersonaSoloLectura es:
  PersonaSoloLectura =
  {
    readonly nombre: string;
    readonly edad: number;
  }
*/
var persona = {
    nombre: "Amin",
    edad: 39
};
console.log(persona.nombre);
function esNumero(valor) {
    return (typeof valor === 'number');
}
var resultado1 = esNumero(42);
var resultado2 = esNumero("hello");
console.log(resultado1);
console.log(resultado2);
