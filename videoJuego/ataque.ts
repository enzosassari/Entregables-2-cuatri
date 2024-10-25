
export class Ataque {
    protected tipo : string;
    protected poder : number; 

    constructor (tipo:string, poder:number){
        this.tipo = tipo;
        this.poder = poder; 
    }

    descripcionAtaque():void{
       return console.log (`El nuevo ataque es : ${this.tipo} con poder de ${this.poder}`);
    }
}



