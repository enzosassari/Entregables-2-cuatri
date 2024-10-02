//clase vehiculo padre de auto, camion y moto , comparto atributo patente 

export class Vehiculo {
    protected patente : string; 

    constructor (patente:string){
        this.patente = patente; 
    }

    getPatente():string{
        return this.patente;
    }

}