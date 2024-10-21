
import { Personaje } from "./personaje";

export class Luchador extends Personaje {
    protected golpeBasico : string = "¡ Golpe letal !" //poder exclusivo de luchador

    constructor(nombre:string){
        super(nombre);
    }

    public atacar(): void {
        return console.log(`${this.nombre} ataca x5`) ;
    }

    public defender(): void {
        return console.log(`${this.nombre} defiende x5`) ;
    }

    public lanzarGolpeBasico():void{
        return console.log(`${this.nombre} lanza ${this.golpeBasico}`);
    }
}