// Función que lee entrada e imprime un saludo con el valor de la entrada
function saludo(nombre) {           // Creación de función con nombre y variable que lee
    console.log(`Hola ${nombre}!`); // Acción
};

saludo("Natako");   // Llamada de función con un valor
console.log("---------------------");


function calc(signo, num1, num2) {
    switch(signo) {
        case '+': console.log(num1 + num2); break; // break para salir cuando lo ejecuta
        case '-': console.log(num1 - num2); break; // esto evita que se ejecute cada case
        case 'x': console.log(num1 * num2); break; // y solo se ejecute el del valor añadido
        case '/': console.log(num1 / num2); break;
        case _: console.log("Opción no válida"); break; // _ indica cualquier otro valor
    }
}

calc('+', 2, 5) // Salida: 7