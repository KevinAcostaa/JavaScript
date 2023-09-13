
// juego para adivinar un número

let numeroUsuario;

let numeroAleatorio = Math.round(Math.random() * 10 + 1); 

alert("Bienvenido al juego de adivinar un número, tienes 3 intentos para adivinar el número correcto entre 1 y 10")
let nombreUsuario = prompt("Cúal es tu nombre?");


let intentos = 0;


function pedirNumeroUsuario() {

    numeroUsuario = parseInt(prompt("Introduce el número del 1 al 10"));

    intentos++;
    if (3 - intentos > 0 && numeroUsuario !== numeroAleatorio){

        alert("Te quedan " + (3 - intentos) + " intentos");

    };
    

};

// Funcion que verifica si el numero introducido es correcto

function verificarNumero(numIngresado) {
    if(numIngresado < numeroAleatorio) {
        alert("el número es mayor")

    }else if (numIngresado > numeroAleatorio){
        alert("El número es menor")
    }else{
        alert("Felicidades " + nombreUsuario + " has acertado el número en " + intentos + " intentos")
    };

};

// Función que verifica el número de intentos

const verificarIntentos = () => {
    if (intentos >= 3){
        alert("Lo siento " + nombreUsuario + " has perdido, no te quedan más intentos, el número a adivinar era " + numeroAleatorio)
    };
};

// Bucles

while (numeroUsuario !== numeroAleatorio && intentos < 3) {
    pedirNumeroUsuario();
    verificarNumero(numeroUsuario);
    verificarIntentos();
};