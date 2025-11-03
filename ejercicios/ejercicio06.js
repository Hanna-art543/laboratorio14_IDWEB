//Función crear contraseña
function generarContrasena () {
    let contraseña = "";
    for (let i=1; i <= 6; i++) {
        let num = Math.trunc(Math.random()*10);
        contraseña += num;
    }
    return contraseña;
}

alert("Contraseña: "+ generarContrasena());