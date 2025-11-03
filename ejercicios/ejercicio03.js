//Lanzamiento de dados
function lanzamientoDados () {
    let num1 = numDados();
    let num2 = numDados();

    return num1 + num2;
}

//Generar números
function numDados  () {
    return Math.trunc(Math.random()*6) +1;
}

alert("Resultados" +
    "\nSuma de dados : "+lanzamientoDados()
);