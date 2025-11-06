//Clase base Usuario
class Usuario {
    #nombre;
    #email;

    constructor(nombre, email) {
        this.#nombre = nombre;
        this.#email = email;
    }

    //Mostrar información básica
    mostrarInfo() {
        return "\nNombre: " + this.#nombre +
               "\nEmail: " + this.#email;
    }

    //Getters (por si se necesitan)
    get nombre() {
        return this.#nombre;
    }

    get email() {
        return this.#email;
    }
}

//Clase Cliente (hereda de Usuario)
class Cliente extends Usuario {
    constructor(nombre, email, nivelFidelidad) {
        super(nombre, email);
        this.nivelFidelidad = nivelFidelidad;
    }

    //Validación para el nivel de fidelidad
    set nivelFidelidad(nivel) {
        if (nivel >= 1 && nivel <= 5) {
            this._nivelFidelidad = nivel;
        } else {
            console.log("Nivel de fidelidad no válido (1 a 5).");
        }
    }

    get nivelFidelidad() {
        return this._nivelFidelidad;
    }

    //Sobrescribir el método mostrarInfo()
    mostrarInfo() {
        return super.mostrarInfo() +
               "\nNivel de fidelidad: " + this._nivelFidelidad;
    }
}

//Clase Administrador (hereda de Usuario)
class Administrador extends Usuario {
    constructor(nombre, email, permisos = ["crear", "editar", "eliminar"]) {
        super(nombre, email);
        this.permisos = permisos;
    }

    //Sobrescribir método mostrarInfo()
    mostrarInfo() {
        return super.mostrarInfo() +
               "\nPermisos: " + this.permisos.join(", ");
    }

    //Métodos propios del administrador
    crear(cliente) {
        console.log("Administrador creó al cliente: " + cliente.nombre);
    }

    editar(cliente) {
        console.log("Administrador editó al cliente: " + cliente.nombre);
    }

    eliminar(cliente) {
        console.log("Administrador eliminó al cliente: " + cliente.nombre);
    }
}

//Ejemplos de uso
const cliente1 = new Cliente("Ana", "ana@gmail.com", 4);
console.log(cliente1.mostrarInfo());

const admin1 = new Administrador("Carlos", "admin@empresa.com");
console.log(admin1.mostrarInfo());

admin1.crear(cliente1);
