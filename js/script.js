let i = 1;

window.onload = () => {
    document.querySelector("#plus").addEventListener("click", function(event) {
        event.preventDefault();
        let template = `   
        <div class="card">
            <div class="card-bg" id="bg-batman${i}">
                <i class="fas fa-heart corazoncito"></i>
            </div>
        <div class="card-img" id="img-batman${i}"></div>
        <h2>BATMAN</h2>
        <p>Bruce Wayne es el único personaje que se identifica como Batman y aparece en Batman, Detective Comics, Batman y Robin, y Batman: The Dark Knight. Dick Grayson vuelve al manto de Nightwing</p>
        <a class="boton-vm" href="./models/details.html">
            Ver mas
        </a>
        </div>
        `;
        document.querySelector("#principal").innerHTML += template;
        i++;
    });

    let juegos = document.querySelector("#juegos");
    juegos.onchange = (juego) => {
        switch (juego.target.value) {
            case "1":
                iniciarJuego();
                break;
            case "2":
                quitarCards();
                break;
            case "3":
                calcular(Math.random() * 10);
                break;
            default:
                break;
        }
    };
};