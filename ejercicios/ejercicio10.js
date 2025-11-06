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
        const valor = Number(precio);
        if(valor > 0) {
            this.#precio = valor;
        }
        else {
            console.log("No es válido. Debe ser mayor que 0.");
        }
    }

    //Getter precio 
    get precio () {
        return "$" + this.#precio.toFixed(2);
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
        console.log("Producto: " + this.#nombre + " | Precio: " + this.#precio +
             " | Stock: " + this.#stock);
    }
}

const p1 = new Producto("Teclado", "120.5", 10);
p1.mostrarInfo(); // Producto: Teclado | Precio: $120.50 | Stock: 10

p1.precio = 85;
console.log(p1.precio); // $85.00

p1.precio = "0";