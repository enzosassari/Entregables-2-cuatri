
export abstract class Personaje {
    
    protected nombre: string; //nombre de personaje
    protected nivel: number = 1 ; //nivel de personaje (todos arrancan con 1)
    protected puntosDeVida: number = 100 ; //puntos de vida (todos arrancan con 100)

    constructor (nombre: string){
        this.nombre = nombre;
    }

    abstract atacar(): void; //metodo abstracto, no todos atacan igual  

    abstract defender(): void; //metodo abstracto, no todos defienden igual

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

