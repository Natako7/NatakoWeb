const legal = 18
let age = 17

// IF -----------------------------------------------
if (age >= 18) {
    console.log("Eres mayor de edad");
};
// --------------------------------------------------


// ELSE ---------------------------------------------
if (age >= 18) {
    console.log("Eres mayor de edad");
}

else {
    console.log("Eres menor de edad");
};
// --------------------------------------------------


// ELSE IF ------------------------------------------
let adulto = true

if (age >= 18) {
    console.log("Eres mayor de edad, puedes pasar");
}

else if (age < 18 && adulto == true) {
    console.log("Eres menor pero vas acompañado por un adulto, puedes pasar");
}

else {
    console.log("Eres menor de edad")
}
// --------------------------------------------------