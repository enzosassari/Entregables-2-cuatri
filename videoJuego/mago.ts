
import { Personaje } from "./personaje";

export class Mago extends Personaje {
    protected hechizoBasico : string = "<-<-<-Explosion de energia->->->" //poder exclusivo del mago 
  
    constructor (nombre:string){
        super(nombre); //agrego el super para heredar 
    }

    //Metodo del poder exclusivo de los magos

    public lanzarHechizoBasico(): void{
        return console.log(`${this.nombre} lanza ${this.hechizoBasico} `) ;
    }
}