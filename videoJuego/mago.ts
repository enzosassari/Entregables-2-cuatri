import { Ataque } from "./ataque";
import { Personaje } from "./personaje";

export class Mago extends Personaje {

    constructor (nombre:string,ataque:Ataque){
        super(nombre,ataque);
    }

    evolucionar(): void {
        this.nivel += 1; 
        this.ataque = new Ataque ("Telekinesis", 500);
        this.defensa += 5; // Aumenta defensa en 5 puntos
        console.log(`${this.nombre} ha evolucionado. Nueva defensa: ${this.defensa}. El nivel ahora es: ${this.nivel}`);
        this.ataque.descripcionAtaque();
    }
}