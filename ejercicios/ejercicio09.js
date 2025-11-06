//Clase Producto
class Producto {
    #nombre;
    #precio;
    #stock;

    constructor (nombre, precio, stock) {
        this.#nombre = nombre;
        this.#precio = precio;
        this.#stock = stock;
    }

    //Setter de precio para validar
    set precio (precio) {
        if(precio > 0) {
            this.#precio = precio;
        }
        else {
            console.log("No es válido.");
        }
    }

    get precio () {
        return this.#precio;
    }

    //Setter de stock para validar
    set stock (stock) {
        if (stock >= 0) {
            this.#stock = stock;
        }
        else {
            console.log("No es válido.");
        }
    }

    get stock () {
        return this.#stock;
    }

    
    get nombre() {
        return this.#nombre;
    }

    mostrarInfo() {
    console.log(
        "Producto: " + this.#nombre +
        "\nPrecio: $" + this.#precio +
        "\nStock: " + this.#stock
    );
    
    }
}

const p1 = new Producto("Laptop", 2500, 10);
p1.mostrarInfo();

p1.precio = -500;
p1.stock = 5;