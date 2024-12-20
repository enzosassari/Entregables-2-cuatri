import { Ataque } from "./ataque";

export abstract class Personaje {
    
    protected nombre: string; //nombre de personaje
    protected nivel: number = 1 ; //nivel de personaje (todos arrancan con 1)
    protected puntosDeVida: number = 100 ; //puntos de vida (todos arrancan con 100)
    protected ataque: Ataque ; //composicion, ataque es de clase ataque 
    protected defensa: number = 20; 

    constructor (nombre: string, ataque:Ataque){
        this.nombre = nombre;
        this.ataque = ataque; 
    }

    abstract evolucionar(): void; //metodo abstracto para evolucionar

   public getVida(): void{
     return console.log (`la vida de ${this.nombre} es de ${this.puntosDeVida}`); 
   }

   public getNivel(): void{
     return console.log(`El nivel del personaje es ${this.nivel}`); 
   }

   public setVida(vida:number):void{
     if (vida<500 && vida>0)
          this.puntosDeVida = vida; 
   }


}

