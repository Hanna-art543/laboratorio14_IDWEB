// Clase base
class Cuenta {
    #saldo;

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    get saldo() {
        return this.#saldo;
    }

    depositar(monto) {
        if (monto > 0) {
            this.#saldo += monto;
            console.log(`Depósito exitoso. Nuevo saldo: $${this.#saldo.toFixed(2)}`);
        } else {
            console.log("Monto no válido para depósito.");
        }
    }

    retirar(monto) {
        console.log("Método retirar() debe ser redefinido por las subclases.");
    }

    transferir(destino, monto) {
        if (monto > 0 && monto <= this.#saldo) {
            this.retirar(monto);
            destino.depositar(monto);
            console.log(`Transferencia de $${monto.toFixed(2)} realizada con éxito.`);
        } else {
            console.log("No se puede realizar la transferencia. Saldo insuficiente o monto inválido.");
        }
    }

    // Para mostrar el saldo de forma más clara
    mostrarSaldo() {
        console.log(`Saldo actual: $${this.#saldo.toFixed(2)}`);
    }

    // Este método permite que las subclases modifiquen el saldo de forma controlada
    _actualizarSaldo(nuevoSaldo) {
        this.#saldo = nuevoSaldo;
    }
}

// Subclase: Cuenta de Ahorro
class CuentaAhorro extends Cuenta {
    retirar(monto) {
        if (monto > 0 && monto <= this.saldo) {
            this._actualizarSaldo(this.saldo - monto);
            console.log(`Retiro exitoso de $${monto.toFixed(2)}. Saldo restante: $${this.saldo.toFixed(2)}`);
        } else {
            console.log("Fondos insuficientes o monto inválido para retiro en Cuenta Ahorro.");
        }
    }
}

// Subclase: Cuenta Corriente
class CuentaCorriente extends Cuenta {
    #limiteSobregiro;

    constructor(saldoInicial, limiteSobregiro) {
        super(saldoInicial);
        this.#limiteSobregiro = limiteSobregiro;
    }

    retirar(monto) {
        if (monto > 0 && monto <= this.saldo + this.#limiteSobregiro) {
            this._actualizarSaldo(this.saldo - monto);
            console.log(`Retiro exitoso de $${monto.toFixed(2)}. Saldo restante: $${this.saldo.toFixed(2)}`);
        } else {
            console.log("No se puede retirar. Monto excede el límite de sobregiro.");
        }
    }
}

//Ejemplo de uso
const ahorro = new CuentaAhorro(500);
const corriente = new CuentaCorriente(300, 200); 

ahorro.retirar(100);           
corriente.retirar(450);       
corriente.transferir(ahorro, 50); 
ahorro.mostrarSaldo();
corriente.mostrarSaldo();
