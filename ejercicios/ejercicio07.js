//Calcular distancia entre ambos puntos y hacia el origen
function distanciaPuntosOrigen (x1, y1, x2, y2) {
    let distanciaEntrePuntos = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2 - y1, 2));
    let distanciaOrigen1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    let distanciaOrigen2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));

    return "\nPunto 1: ("+ x1 + ", " + y1 +") " +
    "\nPunto 2: ("+ x2 + ", " + y2 +") " +
    "\nDistancia entre puntos: "+distanciaEntrePuntos +
    "\nDistancia del punto 1 (origen): "+ distanciaOrigen1 +
    "\nDistancia del punto 2 (origen): "+ distanciaOrigen2
};

console.log(distanciaPuntosOrigen(3, 4, 5, 12));