function iniciarJuego() {
    let nickGamer1 = "";
    let nickGamer2 = "";
    let optionGamer1 = "";
    let optionGamer2 = "";

    function ingresarUsuario() {
        nickGamer1 = prompt("Ingrese el nick del usuario 1: ");
        while (nickGamer1.length < 3) {
            alert("Demasiado corto.");
            nickGamer1 = prompt("Ingrese el nick del usuario 1: ");
        }
        nickGamer2 = prompt("Ingrese el nick del usuario 2: ");
        while (nickGamer2.length < 3) {
            alert("Demasiado corto.");
            nickGamer2 = prompt("Ingrese el nick del usuario 2: ");
        }
    }

    ingresarUsuario();

    function jugar() {
        do {
            optionGamer1 = obtenerOpcion(nickGamer1);
            if (optionGamer1 != "*") {
                optionGamer2 = obtenerOpcion(nickGamer2);
            }
        } while (
            optionGamer1 === "*" ||
            optionGamer2 === "*"
        );
    }

    function obtenerOpcion(nick) {
        let entrada = prompt(
            "Es el turno de " +
            nick +
            ", elige un número (1-Piedra, 2-Papel, 3-Tijera, 4-Spock) o * para salir: "
        );
        while (!estaCadenaEsUnEntero(entrada) && entrada != "*") {
            alert("Opcion incorrecta.");
            entrada = prompt(
                "Es el turno de " +
                nick +
                ", elige un número (1-Piedra, 2-Papel, 3-Tijera, 4-Spock) o * para salir: "
            );
        }

        return entrada;
    }

    jugar();

    function estaCadenaEsUnEntero(cadenaACheckear) {
        let fallo = false;
        let entero = 0;
        try {
            entero = parseInt(cadenaACheckear);
        } catch (error) {
            console.error(error);
            fallo = true;
        }

        console.log("entero: " + entero + "fallo: " + (fallo ? "SI" : "NO"));

        return !fallo;
    }


    function mostrarAnimacion() {
        /*
            como ganar:
                piedra => tijeras
                papel => piedra y spock
                tijera => papel
                spock => tijeras y piedra
            }
            */

        if (optionGamer1 === "1" || optionGamer2 === "1") {
            if (optionGamer1 === "3" || optionGamer2 === "3") {
                alert("Piedra rompe tijeras.");
            }
        }

        if (optionGamer1 === "2" || optionGamer2 === "2") {
            if (optionGamer1 === "1" || optionGamer2 === "1") {
                alert("Papel envuelve piedra.");
            }
            if (optionGamer1 === "4" || optionGamer2 === "4") {
                alert("Papel desaprueba Spock.");
            }
        }

        if (optionGamer1 === "3" || optionGamer2 === "3") {
            if (optionGamer1 === "2" || optionGamer2 === "2") {
                alert("Tijeras corta papel.");
            }
        }

        if (optionGamer1 === "4" || optionGamer2 === "4") {
            if (optionGamer1 === "1" || optionGamer2 === "1") {
                alert("Spock vaporiza piedra.");
            }
            if (optionGamer1 === "3" || optionGamer2 === "3") {
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
            alert("EL ganador de esta ronda es " + nickGamer1 + ".");
        } else if (quienGano == 2) {
            pointsGamer2++;
            alert("EL ganador de esta ronda es " + nickGamer2 + ".");
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