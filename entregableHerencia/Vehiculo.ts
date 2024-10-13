//clase vehiculo padre de auto, camion y moto , comparto atributo patente 

export class Vehiculo {
    protected patente : string; 
    protected marca:string;
    protected modelo:string;

    constructor (patente:string, marca:string, modelo:string){
        this.patente = patente; 
        this.marca = marca;
        this.modelo = modelo; 
    }

    getPatente():string{
        return this.patente;
    }
    getMarca(): string{
        return this.marca; 
    }

    getModelo():string {
        return this.modelo;
    }

}