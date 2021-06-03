/*
“Tragamonedas”
Crear una función que reciba un número que será la cantidad de aciertos del
usuario sobre el total de casillas disponibles. La función deberá devolver el
monto del premio, el cual es proporcional al número de aciertos.
*/

const premioTotal = 2500;
const casilla = 10;

function calcular(aciertos) {
    if (aciertos > casilla) {
        console.log("La cantidad de aciertos es invalida.");
        return 0;
    }
    return aciertos * premioTotal;
}