//Arreglo de calificaciones
let calificaciones = [18, 19, 14, 17, 16, 15];

//Función normalización de calificaciones
function normalizarNotas (arr) {
    let arreglo = [];
    let mayor = Math.max(...arr);

    for(let elemento of arr) {
        arreglo.push(elemento/mayor);
    }
    return arreglo;
}

console.log(normalizarNotas(calificaciones));
