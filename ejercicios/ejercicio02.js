//Función número aleatorio
function numeroAleatorio(min, max) {
    let num = Math.trunc(Math.random()*(max-min)) + min + 1;
    return num;
}

//Ingresar número
let min = parseInt(prompt("Ingresar número mínimo:"));
let max = parseInt(prompt("Ingresar número máximo: "));

let num = numeroAleatorio (min, max);
alert("El número aleatorio es: "+num);

