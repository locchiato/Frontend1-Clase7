/*
“Tragamonedas”
Crear una función que reciba un número que será la cantidad de aciertos del
usuario sobre el total de casillas disponibles. La función deberá devolver el
monto del premio, el cual es proporcional al número de aciertos.
*/

const premioTotal = 2500;
const casilla = 10;

function calcular(aciertos) {
    if (aciertos > casilla || aciertos < 0) {
        alert("La cantidad de aciertos es invalida.");
    }
    alert("El total ganado es: $" + Math.round((aciertos * premioTotal) * 100) / 100);
}