// Clase base
class Empleado {
    #nombre;
    #sueldoBase;

    constructor(nombre, sueldoBase) {
        this.#nombre = nombre;
        this.#sueldoBase = sueldoBase;
    }

    get nombre() {
        return this.#nombre;
    }

    get sueldoBase() {
        return this.#sueldoBase;
    }

    calcularSueldo() {
        return this.#sueldoBase;
    }

    mostrarInfo() {
        return `Empleado: ${this.#nombre}\nSueldo base: $${this.#sueldoBase.toFixed(2)}`;
    }
}

// Subclase Programador
class Programador extends Empleado {
    #lenguaje;

    constructor(nombre, sueldoBase, lenguaje) {
        super(nombre, sueldoBase);
        this.#lenguaje = lenguaje;
    }

    get lenguaje() {
        return this.#lenguaje;
    }

    calcularSueldo() {
        // bono del 10%
        return super.calcularSueldo() * 1.10;
    }

    mostrarInfo() {
        return `${super.mostrarInfo()}\nLenguaje: ${this.#lenguaje}\nSueldo total: $${this.calcularSueldo().toFixed(2)}`;
    }
}

// Subclase ProgramadorSenior
class ProgramadorSenior extends Programador {

    constructor(nombre, sueldoBase, lenguaje) {
        super(nombre, sueldoBase, lenguaje);
    }

    calcularSueldo() {
        // bono del 25%
        return super.calcularSueldo() * 1.25;
    }

    mostrarInfo() {
        return `${super.mostrarInfo()}\n(Programador Senior con bono del 25%)`;
    }
}


const junior = new Programador("Ana", 2500, "JavaScript");
const senior = new ProgramadorSenior("Luis", 3000, "Java");

console.log(junior.mostrarInfo());
console.log("");
console.log(senior.mostrarInfo());
