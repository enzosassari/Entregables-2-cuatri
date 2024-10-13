import { Vehiculo } from "./Vehiculo";

export class Auto extends Vehiculo {   //auto es hijo de vehiculo
    
    private cantidadPuertas : number; 
    
    constructor( cantPuertas:number, patente:string, marca:string, modelo:string){ 
        super(patente,marca,modelo);    //agrego el super para heredar 
        this.cantidadPuertas = cantPuertas;  //atributo distinto de todas las clases
    }

    getCantPuertas(): number{
        return this.cantidadPuertas;
    }
 
}