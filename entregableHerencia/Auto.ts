import { Vehiculo } from "./Vehiculo";

export class Auto extends Vehiculo {   //auto es hijo de vehiculo

    private marca:string;
    private modelo:string;

constructor( marca:string, modelo:string , patente:string){  //pongo patente, heredada de vehiculos
    super(patente);    //agrego el super para heredar 
    this.marca = marca;
    this.modelo = modelo; 
}
 
    getMarca(): string{
        return this.marca; 
    }

    getModelo():string {
        return this.modelo;
    }

}