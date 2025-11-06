class Figura {
    #base;
    #altura;

    constructor(base, altura) {
        this.#base = base;
        this.#altura = altura;
    }

    area () {
        return 0;
    }

    perimetro () {
        return 0;
    }
}

class Cuadrado extends Figura {
    constructor(lado) {
        super (lado, lado);
    }

    area () {
        return this.base * this.altura;
    }

    perimetro () {
        return 4 * this.base;
    }
}

class Triangulo extends Figura {
    constructor(base, altura, lado1, lado2, lado3) {
        super (base, altura);
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    area () {
        return (this.base * this.altura) / 2;
    }

    perimetro () {
        return this.lado1 + this.lado2 + this.lado3;
    }
}

const c = new Cuadrado(5);
console.log("Área del cuadrado:", c.area());        
console.log("Perímetro del cuadrado:", c.perimetro()); 

const t = new Triangulo(4, 3, 3, 4, 5);
console.log("Área del triángulo:", t.area());        
console.log("Perímetro del triángulo:", t.perimetro()); 