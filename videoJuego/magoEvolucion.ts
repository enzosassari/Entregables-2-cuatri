
import { Mago } from "./mago";

export class MagoEvolucion extends Mago{
    protected hechizoEvolucionado: string = "<-<-<-Telekinesis->->->"; //poder exclusivo de la evolucion de mago

    constructor ( nombre:string){
        super(nombre);
        this.puntosDeVida = 200; // le damos el doble de vida con la evolucion 
        this.nivel = 2; //le damos el nivel 2 con la evolucion 
    }

    //Metodo del poder exclusivo de los magos evolucionados 

    public atacar(): void {
        return console.log(`${this.nombre} ataca x20`) ;
    }

    
    public defender(): void {
        return console.log(`${this.nombre} defiende x20`) ;
    }


    public lanzarHechizoEvolucionado():void{
        return console.log(`${this.nombre} lanza  ${this.hechizoEvolucionado} `) ;
    }

}