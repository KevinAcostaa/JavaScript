// Simulador de empleados

// Hacemos una clase empleado
class Empleado {
    constructor(nombre, puesto, edad, sueldo = 0) {
    this.nombre = nombre;
    this.puesto = puesto;
    this.edad = edad;
    this.sueldo = sueldo;
}


// Pagar sueldo
    pagarSueldo(monto) {
    this.sueldo += monto;
    
    }

    
cambiarNombre(nombre) {
    this.nombre = nombre;
    alert("EL nombre a sido cambiado con éxito");
}

cambiarEdad(edad) {
    if (isNaN(edad)) {
        return alert("La edad debe ser un valor numérico");
    }
    this.edad = edad;
    alert("La edad a sido cambiada con éxito");
    }

    cambiarPuesto(puesto) {
    this.puesto = puesto;
    alert("El puesto a sido cambiado con éxito");
    }
}


const mostrarEmpleados = (empleados) => {
    console.clear();
    console.log("Empleados registrados");

  // Organizamos los empleado alfabéticamente
    empleados.sort((a, b) => {
    if (a.nombre > b.nombre) {
        return 1;
    } else if (a.nombre < b.nombre) {
        return -1;
    } else {
        return 0;
    }
    });

    empleados.forEach((empleado) => console.log(empleado));
};

// Declaramos un array vacío de empleados
let empleados = [
    new Empleado("Juan", "Jr", 22),
    new Empleado("Marta", "Jr", 27),
    new Empleado("Sofia", "Sr", 32),
    new Empleado("Alan", "Ssr", 36),
];

mostrarEmpleados(empleados);

// Función para crear y agregar empleados al array

const agregarEmpleado = () => {

    let nombre = prompt("Ingrese el nombre del empleado");
    let puesto = prompt("Ingrese el puesto del empleado");
    let edad = parseInt(prompt("Ingrese la edad del empleado"));


    let empleado = new Empleado(nombre, edad, puesto);

  // Agregamos el empleado en el array empelados
    empleados.push(empleado);


    mostrarEmpleados(empleados);
};

// Función para eliminar empleados
const eliminarEmpleado = () => {
    const empleadoBuscado = empleadoExiste();

    if (!empleadoBuscado) return;

    const confirmacion = confirm(
    `Estas seguro que deseas eliminar el empleado ${empleadoBuscado.nombre} ?`
    );

    if (confirmacion) {
    empleados = empleados.filter(
        (empleado) =>
        empleado.nombre.toLowerCase() !== empleadoBuscado.nombre.toLowerCase()
    );
    mostrarEmpleados(empleados);
    } else {
    alert("Eliminación cancelada");
    }
};

const editarEmpleado = () => {
    const empleadoBuscado = empleadoExiste();

    if (!empleadoBuscado) return;

    alert(
    "Menú editar empleado:\n1 - Editar nombre\n2 - Editar puesto\n3 - Editar edad"
    );

    let opcion = parseInt(prompt("Ingrese una opción para editar"));

    switch (opcion) {
    case 1:
        let nombre = prompt("Ingrese el nombre del empleado");
        empleadoBuscado.cambiarNombre(nombre);
        break;
    case 2:
        let puesto = prompt("Ingrese el puesto del empleado");
        empleadoBuscado.cambiarPuesto(puesto);
        break;
    case 3:
        let edad = parseInt(prompt("Ingrese la edad del empleado"));
        empleadoBuscado.cambiarEdad(edad);
        break;
    default:
        alert("Ingrese una opción correcta");
    }

    mostrarEmpleados(empleados);
};

const pagarSueldoEmpleado = () => {
    const empleadoBuscado = empleadoExiste();
    if (!empleadoBuscado) return;

    let monto = parseFloat(prompt("Ingrese el monto a depositar del empleado"));

    if (isNaN(monto)) {
    return alert("Debe ingresa un valor numérico");
    }

    empleadoBuscado.pagarSueldo(monto);

    mostrarEmpleados(empleados);
};

// Función para verificar si el empleado existe

const empleadoExiste = () => {

    let nombreEmpleado = prompt("Ingrese el nombre del empleado");


    let indice = empleados.findIndex(
    (empleado) => empleado.nombre.toLowerCase() === nombreEmpleado.toLowerCase()
    );

    if (indice === -1) {
    
    return alert(`El empleado ${nombreEmpleado} no existe`);
    }

    return empleados[indice];
};

let encendido = true; 

// Ciclo while que maneja la aplicación
while (encendido) {
    alert(
    "Menú principal:\n1 - Agregar un empleado\n2 - Eliminar un empleado\n3 - Modificar empleado\n4 - Pagar sueldo\n5 - Apagar"
    );
    let opcion = parseInt(prompt("Ingrese una opción"));

    switch (opcion) {
    case 1:
        agregarEmpleado();
        break;
    case 2:
        eliminarEmpleado();
        break;
    case 3:
        editarEmpleado();
        break;
    case 4:
        pagarSueldoEmpleado();
        break;
    case 5:
        encendido = false;
        break;
        default:
    alert("Inserte una opción correcta");
    }
}

alert("Gracias vuelva pronto");
