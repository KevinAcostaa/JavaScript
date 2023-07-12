

    //Saludamos al usuario 
    let saludo = alert("Bienvenidos al juego de adivinar el nombre correcto")



    // Solicitamos el nombre al Usuario
    function ingresarNombre() {
        let nombreUsuario;
    
        while (!nombreUsuario) {
            nombreUsuario = prompt("Primero dinos ¿Cuál es tú nombre?");
        }
        
        alert("¡Hola, " + nombreUsuario + "! Estas listo para jugar?. Adelante!!");
        }
        
        ingresarNombre();

// Función para adivinar el nombre
function adivinarNombre() {
    const nombreCorrecto = "Kevin";
    let intentos = 3;
    while (intentos > 0) {
        
        
    let nombreUsuario = prompt("Debes adivinar el nombre: (Te quedan " + intentos + " intentos)");


    if (nombreUsuario.toLowerCase() === nombreCorrecto.toLowerCase()) {

        alert("¡Adivinaste! El nombre correcto es " + nombreCorrecto);
        return;
    }
    
    else {
        alert("El nombre ingresado no es correcto. Te quedan " + (intentos - 1) + " intentos.");
        intentos--;
    }

    }
    alert(
    "Agotaste tus intentos. El nombre correcto era " + nombreCorrecto);
}

adivinarNombre();






















// ESTO LO DEJO ACÁ SOLAMENTE PARA MI



// let apellido = "Acosta";

// console.log(apellido);

// let edad = prompt("Ingrese su edad");

// alert("la edad ingresada es: " + edad);

// ============== Esctrucura ciclo FOR =====================

// for (let i = 0; i <= 10; i++){

//     console.log(i);

// }

// ======== ALGORITMO PARA CALCULAR LA TABLA DE MULTIPLICAR =====

// let ingresarNumero = parseInt(prompt("Ingresar un número"));

// for(let i = 1; i <=10; i++){
//         let resultado = ingresarNumero * i;
//         alert(ingresarNumero + " X " + i + "=" + resultado)
// }
