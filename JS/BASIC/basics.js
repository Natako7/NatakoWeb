// Imprimir en consola
console.log("Hola mundo");
console.log(`Template strings, para combinar variables (${variable}),
   strings, números (${7}), saltos de línea, etc... sin causar errores`);

// Tipos de variables (let, const y var)
// --------------------------LET----------------------------
let modificable = "El valor de let es modificable";
modificable = "Nuevo valor de variable let";

console.log(modificable);

// -------------------------CONST---------------------------
const constante = "El valor de const NO es modificable";

console.log(constante);

// --------------------------VAR---------------------------
variable = "El valor de var es modificable, y puede cambiar incluso antes de su creación";
console.log(variable);

var variable = "Valor original de var";
console.log(variable);

// Tipos de valores
let string = "texto";
let number = 7;
let boolean = true;
boolean = false;
let array = [1,2,3];

// Ver tipo de valor con typeof()
console.log(typeof("Badajoz")); // string
console.log(typeof(777));       // number
console.log(typeof(true));      // boolean
console.log(typeof([1,2,3]));    // object (Arrays son un tipo especial de objetos)