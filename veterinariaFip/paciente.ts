
export class Paciente {
  public idDueno : number; 
  public nomPaciente: string;
  public especie: string;

  constructor(nomPaciente: string, especie: string, idDueno: number) {
    this.nomPaciente = nomPaciente;
    this.especie = especie;
    this.idDueno = idDueno; 
  }
  
  public getPaciente(): string{
    return this.nomPaciente; 
  }

  public getIdPaciente(): number{
    return this.idDueno;  
  }

  public mostrarIdPaciente():void{
    console.log("El ID del cliente ",this.nomPaciente, " es: ", this.idDueno);
  }

}
