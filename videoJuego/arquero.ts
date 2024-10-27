import { Personaje } from "./personaje";
import { Ataque } from "./ataque";

export class Arquero extends Personaje{
    
    constructor(nombre:string, ataque:Ataque){
        super(nombre,ataque);
    }

    evolucionar(): void {
        this.nivel += 1; 
        this.ataque = new Ataque ("Flecha de fuego", 200); 
        this.defensa += 5; // Aumenta defensa en 5 puntos
        console.log(`${this.nombre} ha evolucionado. Nueva defensa: ${this.defensa}. El nivel ahora es: ${this.nivel}`);
        this.ataque.descripcionAtaque();
    }
}
