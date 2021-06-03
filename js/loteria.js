/*
“Loteria”
Crear un programa que consista en una apuesta donde el usuario tenga que
ingresar un objeto o lugar con el que soñó ese día, para que luego lo muestre
en pantalla y se calcule aleatoriamente un resultado numérico con 4 posibles
casos de premios que pueda ganar: si el resultado es 0, gana $1000, si es 1,
gana $10000; si es 2 gana $10000, y si es 3 gana $100000.
*/

function resultadoLoteria() {
    const lugarSoñado = prompt("Ingrese el lugar que soñó: ");
    const resultadoNumerico = parseInt(Math.random() * 4);
    const premios = [1000, 10000, 10000, 100000]
    alert("Su lugar soñado fue: " + lugarSoñado +
        "\ny ganó $" + premios[resultadoNumerico]);
}

resultadoLoteria()