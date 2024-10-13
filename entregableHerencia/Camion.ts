import { Vehiculo } from "./Vehiculo";

export class Camion extends Vehiculo {  //camion es un hijo de vehiculo

    private tara: number; 

    constructor( tara:number, patente:string,marca:string, modelo:string,){   
        super(patente,marca,modelo);         //agrego el super para heredar 
        this.tara = tara;     //atributo distinto de todas las clases
    }
    
    getTara(): number{
        return this.tara; 
    }

}