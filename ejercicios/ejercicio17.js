// Clase base
class Notificacion {
    enviar() {
        console.log("Enviando notificación genérica...");
    }
}

// Subclase: Email
class Email extends Notificacion {
    enviar() {
        console.log("Enviando notificación por Email al usuario...");
    }
}

// Subclase: SMS
class SMS extends Notificacion {
    enviar() {
        console.log("Enviando notificación por SMS al número registrado...");
    }
}

// Subclase: Push
class Push extends Notificacion {
    enviar() {
        console.log("Enviando notificación Push a la aplicación del usuario...");
    }
}

// Función para procesar notificaciones
    console.log("Procesando notificaciones...");
    for (let notificacion of lista) {
        notificacion.enviar(); // cada tipo ejecuta su propia versión
    }

//Ejemplo de uso
const n1 = new Email();
const n2 = new SMS();
const n3 = new Push();

// Array de notificaciones (todas distintas, pero tratadas igual)
const notificaciones = [n1, n2, n3];

// Procesar dinámicamente
procesarNotificaciones(notificaciones);
