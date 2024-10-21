
import { Personaje } from "./personaje";

export class Luchador extends Personaje {
    protected golpeBasico : string = "¡ Golpe letal !" //poder exclusivo de luchador

    constructor(nombre:string){
        super(nombre);
    }

    public lanzarGolpeBasico():void{
        return console.log(`${this.nombre} lanza ${this.golpeBasico}`);
    }
}