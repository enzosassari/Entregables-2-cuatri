import { Vehiculo } from "./Vehiculo";

export class Moto extends Vehiculo {  //moto es un hijo de vehiculo
    
    private cilindrada: number; 

    constructor( cilindrada: number, patente:string,marca:string, modelo:string,){  
        super(patente,marca,modelo);  //agrego el super para heredar 
        this.cilindrada = cilindrada; //atributo distinto de todas las clases
    }
    
    getCilindrada():number{
        return this.cilindrada; 
    }
}