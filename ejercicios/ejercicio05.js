//Funcion de grados a radianes
function gradosARadianes (grados) {
    let radianes = grados * (Math.PI/180);
    let seno = Math.sin(radianes);
    let coseno = Math.cos(radianes);

    return "\nGrado en radianes: "+radianes +
    "\nSeno: "+ seno +
    "\nCoseno: "+ coseno
};

//Funcion de radianes a grados
function radianesAGrados (radianes) {
    let grados = radianes * (180/Math.PI);
    return radianes + " en grados " + grados;
}

//Ingresar grados y mostrar
console.log(gradosARadianes(90));

//Ingresar radianes y mostrar
console.log(radianesAGrados(0.5));
