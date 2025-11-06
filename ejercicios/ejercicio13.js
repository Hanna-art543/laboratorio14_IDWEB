//Clase base Usuario
class Usuario {
    #nombre;
    #email;

    constructor(nombre, email) {
        this.#nombre = nombre;
        this.#email = email;
    }

    //Método base (será sobrescrito)
    mostrarInfo() {
        return "\nNombre: " + this.#nombre +
               "\nEmail: " + this.#email;
    }

    //Getters
    get nombre() {
        return this.#nombre;
    }

    get email() {
        return this.#email;
    }
}

//Clase Cliente
class Cliente extends Usuario {
    constructor(nombre, email, nivelFidelidad) {
        super(nombre, email);
        this.nivelFidelidad = nivelFidelidad;
    }

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

    //Sobrescribe mostrarInfo()
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

    mostrarInfo() {
        return super.mostrarInfo() +
               "\nPermisos: " + this.permisos.join(", ");
    }
}

//POLIMORFISMO

//Creamos usuarios
const usuario1 = new Cliente("Ana", "ana@gmail.com", 4);
const usuario2 = new Administrador("Carlos", "admin@empresa.com");
const usuario3 = new Cliente("Luz", "luz@gmail.com", 5);
const usuario4 = new Administrador("Mario", "mario@empresa.com", ["editar", "eliminar"]);

//Guardamos todos en una lista común
const listaUsuarios = [usuario1, usuario2, usuario3, usuario4];

//Recorremos la lista 
console.log("LISTA DE USUARIOS");

for (let usuario of listaUsuarios) {
    console.log(usuario.mostrarInfo());
    console.log("");
}
