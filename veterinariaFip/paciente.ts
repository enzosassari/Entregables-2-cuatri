export class Paciente {

  protected nomPaciente: string;
  protected especie: string;

  constructor(nomPaciente: string, especie: string) {
    this.nomPaciente = nomPaciente;
    this.especie = especie;
  }
  
  public getPaciente(): string{
    return this.nomPaciente; 
  }

}
