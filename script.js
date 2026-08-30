/* =========================================
   OBTENER PANTALLAS
========================================= */

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const screen4 = document.getElementById("screen4");
const screen5 = document.getElementById("screen5");


/* =========================================
   BOTONES
========================================= */

const startButton =
    document.getElementById("startButton");

const continueButton =
    document.getElementById("continueButton");

const cakeButton =
    document.getElementById("cakeButton");

const finalButton =
    document.getElementById("finalButton");


/* =========================================
   FUNCIÓN CAMBIAR PANTALLA
========================================= */

function changeScreen(currentScreen, nextScreen) {

    currentScreen.classList.remove("active");

    setTimeout(() => {

        nextScreen.classList.add("active");

    }, 400);

}


/* =========================================
   PANTALLA 1 → PANTALLA 2
========================================= */

startButton.addEventListener("click", () => {

    changeScreen(
        screen1,
        screen2
    );

});


/* =========================================
   PANTALLA 2 → PANTALLA 3
========================================= */

continueButton.addEventListener("click", () => {

    changeScreen(
        screen2,
        screen3
    );

});


/* =========================================
   PANTALLA 3 → PASTEL
========================================= */

cakeButton.addEventListener("click", () => {

    changeScreen(
        screen3,
        screen4
    );


    /* Disparar la animación de las
       capas del pastel cayendo en
       su lugar */

    const cake =
        document.querySelector(".cake");


    /* Por si el usuario vuelve a
       entrar a esta pantalla más
       de una vez */

    cake.classList.remove("drop");

    void cake.offsetWidth; /* forzar reflow */


    setTimeout(() => {

        cake.classList.add("drop");

    }, 450);

});


/* =========================================
   VELAS
========================================= */

const candles =
    document.querySelectorAll(".candle");

let blownCandles = 0;


candles.forEach((candle) => {

    candle.addEventListener("click", () => {

        /* Evitar contar una vela dos veces */

        if (candle.classList.contains("blown")) {
            return;
        }


        /* Apagar vela */

        candle.classList.add("blown");

        blownCandles++;


        /* Comprobar si todas están apagadas */

        if (blownCandles === candles.length) {

            setTimeout(() => {

                showBirthdayMessage();

            }, 900);

        }

    });

});


/* =========================================
   MOSTRAR FELICITACIÓN
========================================= */

function showBirthdayMessage() {

    const wishMessage =
        document.getElementById("wishMessage");

    const birthdayMessage =
        document.getElementById("birthdayMessage");


    wishMessage.style.opacity = "0";


    createConfetti();


    setTimeout(() => {

        birthdayMessage.classList.add("show");

    }, 500);

}


/* =========================================
   CREAR CONFETI
========================================= */

function createConfetti() {

    const container =
        document.getElementById(
            "confetti-container"
        );


    /* Limpiar confeti anterior */

    container.innerHTML = "";


    const pieces = 120;


    for (let i = 0; i < pieces; i++) {

        const confetti =
            document.createElement("div");


        confetti.classList.add(
            "confetti"
        );


        /* Posición horizontal */

        confetti.style.left =
            Math.random() * 100 + "%";


        /* Tamaño */

        const size =
            Math.random() * 7 + 5;

        confetti.style.width =
            size + "px";

        confetti.style.height =
            size * 1.5 + "px";


        /* Animación */

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        confetti.style.animationDuration =
            Math.random() * 2 + 3 + "s";


        /* Formas */

        const shapes = [
            "0",
            "50%",
            "2px"
        ];

        confetti.style.borderRadius =
            shapes[
                Math.floor(
                    Math.random() *
                    shapes.length
                )
            ];


        /*
         * Usamos el color generado
         * por el navegador para que
         * cada pieza sea diferente.
         */

        confetti.style.background =
            `hsl(${Math.random() * 360}, 80%, 70%)`;


        container.appendChild(confetti);

    }

}


/* =========================================
   ÚLTIMA SORPRESA
========================================= */

finalButton.addEventListener("click", () => {

    changeScreen(
        screen4,
        screen5
    );

});
