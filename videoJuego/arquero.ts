import { Personaje } from "./personaje";

export class Arquero extends Personaje{
    protected flechaBasica : string = " Golpe con flecha! "; 

    constructor(nombre:string){
        super(nombre);
    }

    public lanzarFlechaBasica(): void{
        return console.log (`${this.nombre} lanza ${this.flechaBasica}`); 
    }
}