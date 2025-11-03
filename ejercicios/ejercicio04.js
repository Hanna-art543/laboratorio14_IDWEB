//Función cuadrado, cubo y raíz
function operaciones (num) {
    let cuadrado = Math.pow(num, 2);
    let cubo = Math.pow(num, 3);
    let raiz = Math.sqrt(num);

    return "\nElevado al cuadrado: "+cuadrado +
    "\nElevado al cubo: "+ cubo +
    "\nRaíz del número: "+ raiz;
}

//Ingresar un número
let num = parseInt(prompt("Ingresa un número: "));

alert("Resultados"+ operaciones(num));