
import { Luchador } from "./luchador";

export class LuchadorEvolucion extends Luchador{
    protected golpeEvolucionado : string = "¡Golpe mortal!";
    
    constructor (nombre:string){
        super(nombre); 
        this.puntosDeVida = 300;  //evoluciona y le damos mas puntos de vida
        this.nivel = 2;  //pasa a nivel 2 
    }

    public atacar(): void {
        return console.log(`${this.nombre} ataca x42`) ;
    }

    public defender(): void {
        return console.log(`${this.nombre} defiende x42`) ;
    }

    public lanzarGolpeEvolucionado(): void {
        return console.log (`${this.nombre} lanza ${this.golpeEvolucionado}`); 
    }
}

