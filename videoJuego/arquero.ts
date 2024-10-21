import { Personaje } from "./personaje";

export class Arquero extends Personaje{
    protected flechaBasica : string = " Golpe con flecha! "; 

    constructor(nombre:string){
        super(nombre);
    }

    
    public atacar(): void {
        return console.log(`${this.nombre} ataca x15`) ;
    }

    public defender(): void {
        return console.log(`${this.nombre} defiende x15`) ;
    }


    public lanzarFlechaBasica(): void{
        return console.log (`${this.nombre} lanza ${this.flechaBasica}`); 
    }
}