function iniciarJuego() {
    const OPT_MIN = 1;
    const OPT_MAX = 4;
    let nickGamer1 = "";
    let nickGamer2 = "";
    let optionGamer1 = "";
    let optionGamer2 = "";
    let pointsGamer1 = 0;
    let pointsGamer2 = 0;

    function ingresarUsuario() {
        nickGamer1 = prompt("Ingrese el nick del usuario 1: ");
        if (!nickGamer1) return false;
        while (nickGamer1.length < 4) {
            alert("Demasiado corto.");
            nickGamer1 = prompt("Ingrese el nick del usuario 1: ");
        }
        nickGamer2 = prompt("Ingrese el nick del usuario 2: ");
        if (!nickGamer2) return false;
        while (nickGamer2.length < 4) {
            alert("Demasiado corto.");
            nickGamer2 = prompt("Ingrese el nick del usuario 2: ");
        }
        return true;
    }

    const res = ingresarUsuario();
    if (!res) return 0;

    function estaCadenaEsUnEntero(cadenaACheckear) {
        return !isNaN(parseInt(cadenaACheckear));
    }

    function estaCadenaEsInvalida(cadena) {
        if (cadena === "*") return false;
        if (!estaCadenaEsUnEntero(cadena)) return true;

        const numero = parseInt(cadena);
        if (!(numero <= OPT_MAX && numero >= OPT_MIN)) return true;

        return false;
    }

    function obtenerOpcion(nick) {
        let entrada = prompt(
            "Es el turno de " +
            nick +
            ", elige un número (1-Piedra, 2-Papel, 3-Tijera, 4-Spock) o * para salir: "
        );
        while (estaCadenaEsInvalida(entrada)) {
            alert("Opcion incorrecta.");
            entrada = prompt(
                "Es el turno de " +
                nick +
                ", elige un número (1-Piedra, 2-Papel, 3-Tijera, 4-Spock) o * para salir: "
            );
        }

        return entrada;
    }

    function jugar() {
        optionGamer1 = obtenerOpcion(nickGamer1);
        if (optionGamer1 != "*")
            optionGamer2 = obtenerOpcion(nickGamer2);

    }

    jugar();

    function mostrarAnimacion() {
        /*
            como ganar:
                piedra => tijeras
                papel => piedra y spock
                tijera => papel
                spock => tijeras y piedra
            }
            */
        const valOption1 = parseInt(optionGamer1);
        const valOption2 = parseInt(optionGamer2);

        if (valOption1 == 1 || valOption2 === 1) {
            if (valOption1 === 3 || valOption2 === 3) {
                alert("Piedra rompe tijeras.");
            }
        }

        if (valOption1 === 2 || valOption2 === 2) {
            if (valOption1 === 1 || valOption2 === 1) {
                alert("Papel envuelve piedra.");
            }
            if (valOption1 === 4 || valOption2 === 4) {
                alert("Papel desaprueba Spock.");
            }
        }

        if (valOption1 === 3 || valOption2 === 3) {
            if (valOption1 === 2 || valOption2 === 2) {
                alert("Tijeras corta papel.");
            }
        }

        if (valOption1 === 4 || valOption2 === 4) {
            if (valOption1 === 1 || valOption2 === 1) {
                alert("Spock vaporiza piedra.");
            }
            if (valOption1 === 3 || valOption2 === 3) {
                alert("Spock destroza tijeras.");
            }
        }
    }

    function cualGana(op1, op2) {
        let resultado = 0;

        if (op1 == op2) {
            resultado = 0;
        }
        if (
            (op1 == 1 && op2 == 3) ||
            (op1 == 2 && op2 == 4) ||
            (op1 == 2 && op2 == 1) ||
            (op1 == 3 && op2 == 2) ||
            (op1 == 4 && op2 == 1) ||
            (op1 == 4 && op2 == 3)
        ) {
            resultado = 1;
        }
        if (
            (op1 == 3 && op2 == 1) ||
            (op1 == 4 && op2 == 2) ||
            (op1 == 1 && op2 == 2) ||
            (op1 == 2 && op2 == 3) ||
            (op1 == 1 && op2 == 4) ||
            (op1 == 3 && op2 == 4)
        ) {
            resultado = 2;
        }

        return resultado;
    }

    function mostrarQuienGanoElTurno(quienGano) {
        if (quienGano == 1) {
            pointsGamer1++;
            alert("El ganador de esta ronda es " + nickGamer1 + ".");
        } else if (quienGano == 2) {
            pointsGamer2++;
            alert("El ganador de esta ronda es " + nickGamer2 + ".");
        } else {
            alert("La ronda termino en empate.");
        }
    }

    while (
        optionGamer1 != "*" &&
        optionGamer2 != "*"
    ) {
        let quienGano = 0;
        if (
            estaCadenaEsUnEntero(optionGamer1) &&
            estaCadenaEsUnEntero(optionGamer2)
        ) {
            mostrarAnimacion();
            quienGano = cualGana(parseInt(optionGamer1), parseInt(optionGamer2));
        }

        mostrarQuienGanoElTurno(quienGano);
        jugar();
    }

    function mostrarQuienGanoLaPartida() {
        if (pointsGamer1 == pointsGamer2) {
            alert("La partida termino en empate.");
        } else if (pointsGamer1 > pointsGamer2) {
            alert("EL ganador de esta partida es " + nickGamer1 + ".");
        } else {
            alert("EL ganador de esta partida es " + nickGamer2 + ".");
        }
    }

    if (pointsGamer1 != 0 || pointsGamer2 != 0) mostrarQuienGanoLaPartida();
}