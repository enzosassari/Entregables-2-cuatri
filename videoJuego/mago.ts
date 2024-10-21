
import { Personaje } from "./personaje";

export class Mago extends Personaje {
    protected hechizoBasico : string = "<-<-<-Explosion de energia->->->" //poder exclusivo del mago 
  
    constructor (nombre:string){
        super(nombre); //agrego el super para heredar 
    }

    //Metodo del poder exclusivo de los magos

    public atacar(): void {
        return console.log(`${this.nombre} ataca x10`) ;
    }

    public defender(): void {
        return console.log(`${this.nombre} defiende x10`) ;
    }


    public lanzarHechizoBasico(): void{
        return console.log(`${this.nombre} lanza ${this.hechizoBasico} `) ;
    }
}