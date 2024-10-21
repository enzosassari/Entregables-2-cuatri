import { Arquero } from "./arquero";

export class ArqueroEvolucion extends Arquero{
    protected flechaEvolucionado : string = " Golpe con flecha de fuego! ";  //nuevo ataque exclusivo de la evolucion 

    constructor(nombre:string){
        super(nombre);
        this.puntosDeVida = 250; //evoluciona y le damos 250 de vida
        this.nivel = 2;  //pasamos de nivel 
    }

    
    public atacar(): void {
        return console.log(`${this.nombre} ataca x35`) ;
    }

    public defender(): void {
        return console.log(`${this.nombre} defiende x35`) ;
    }


    public lanzarFlechaEvolucionada(): void{
        return console.log (`${this.nombre} lanza ${this.flechaEvolucionado}`); 
    }
}