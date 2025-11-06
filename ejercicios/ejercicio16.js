// Clase Producto
class Producto {
    #nombre;
    #precio;

    constructor(nombre, precio) {
        this.#nombre = nombre;
        this.#precio = precio;
    }

    get nombre() {
        return this.#nombre;
    }

    get precio() {
        return this.#precio;
    }

    mostrarInfo() {
        return `${this.#nombre} - $${this.#precio.toFixed(2)}`;
    }
}

// Clase Carrito (compone productos)
class Carrito {
    #productos;

    constructor() {
        this.#productos = [];
    }

    agregarProducto(producto) {
        if (producto instanceof Producto) {
            this.#productos.push(producto);
            console.log(`${producto.nombre} agregado al carrito.`);
        } else {
            console.log("Solo se pueden agregar objetos de tipo Producto.");
        }
    }

    calcularTotal() {
        let total = 0;
        for (let p of this.#productos) {
            total += p.precio;
        }
        return total;
    }

    mostrarResumen() {
        console.log("Resumen del carrito");
        if (this.#productos.length === 0) {
            console.log("El carrito está vacío.");
        } else {
            this.#productos.forEach((p, i) => {
                console.log(`${i + 1}. ${p.mostrarInfo()}`);
            });
            console.log(`\nTotal a pagar: $${this.calcularTotal().toFixed(2)}`);
        }
    }
}

// Ejemplo de uso
const p1 = new Producto("Laptop", 2500);
const p2 = new Producto("Mouse", 120.5);
const p3 = new Producto("Auriculares", 340.75);

const carrito = new Carrito();
carrito.agregarProducto(p1);
carrito.agregarProducto(p2);
carrito.agregarProducto(p3);

carrito.mostrarResumen();
