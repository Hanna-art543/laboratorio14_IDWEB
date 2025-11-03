//Ingresar un número
let numDecimal = parseFloat(prompt("Ingrese número decimal: "));

//Redondeo hacia abajo
let abajo = Math.floor(numDecimal);

//Redondeo hacia arriba
let arriba = Math.ceil(numDecimal);

//Redondeo normal
let normal = Math.round(numDecimal);

alert("Redondeos"+
    "\nRedondeo hacia abajo: "+abajo+
    "\nRedondeo hacia arriba: "+ arriba +
    "\nRedondeo normal: "+normal
);