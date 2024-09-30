
export class Auto {
    private patente: string;
    private marca:string;
    private modelo:string;

constructor(patente:string, marca:string, modelo:string){
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