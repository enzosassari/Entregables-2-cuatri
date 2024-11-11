export class Paciente {

  public nomPaciente: string;
  public especie: string;

  constructor(nomPaciente: string, especie: string) {
    this.nomPaciente = nomPaciente;
    this.especie = especie;
  }
  
  public getPaciente(): string{
    return this.nomPaciente; 
  }

}
