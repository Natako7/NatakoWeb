// FOR -----------------------------------------------
for (i = 1; i <= 5; i++) { 
// (variable o valor de nueva variable; condición; incremento/decremento)
    console.log(`Mensaje ${i}`);
};
// Imprime desde 1 hasta 5, de 1 en 1.

for (i = 100; i >= 10; i -= 10) {
    console.log(i);
};
//Imprime desde 100 hasta 10, de 10 en 10.


// WHILE -----------------------------------------------
let num = 1;

while (num <= 5) {
// while (condición)
    console.log(num);
    num++; // Incrementa el valor cada repetición para evitar bucle infinito
}
// Imprime desde 1 hasta 5, de 1 en 1

num = 100
while (num >= 10) {
    console.log(num);
    num-=10
}
// Imprime desde 100 hasta 10, de 10 en 10.

// Ambos códigos han hecho lo mismo pero de distinta forma.