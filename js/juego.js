let entrada, optUser;
let options = ["piedra", "papel", "tijera"];

do {
    entrada = prompt("Ingrese piedra, papel o tijera")
    optUser = options.indexOf(entrada);
    optPc = Math.round(Math.random() * 3);

    /*
    piedra - piedra => empate
    papel - papel => empate
    tijera - tijera => empate
    piedra - tijera => gana USER
    papel - piedra => gana USER
    tijera - papel => gana USER
    piedra - papel => gana PC
    papel - tijera => gana PC
    tijera - piedra => gana PC
    */


    if (optUser == optUser) {
        alert("Termino en empate.")
    }
    if ((optUser == 0 && optPc == 2) ||
        (optUser == 1 && optPc == 0) ||
        (optUser == 2 && optPc == 1)) {
        alert("Ganó el usuario.");
    }
    if ((optUser == 2 && optPc == 0) ||
        (optUser == 0 && optPc == 1) ||
        (optUser == 1 && optPc == 2)) {
        alert("Ganó la PC.");
    }


} while (confirm("Quiere volver a jugar?"));