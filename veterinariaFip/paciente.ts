
export class Paciente {

  public nomPaciente: string;
  public especie: string;
  public edad:number;
  public exotica:boolean = false; 

  constructor(nomPaciente: string, especie: string, edad:number) {
    this.nomPaciente = nomPaciente;
    this.setEspecie(especie);
    this.edad = edad; 
  }
  
  public getPaciente(): string{
    return this.nomPaciente; 
  }

  public getExotica(): boolean{
    return this.exotica;
  }

  public getEspecie(): string{
    return this.especie;
  }

  public setEspecie(nuevaEspecie:string): void{
    this.especie = nuevaEspecie; 
    if ((nuevaEspecie!="perro")&&(nuevaEspecie!="gato")){
      this.exotica = true;
    }else{
      this.exotica = false; 
    }
  }

  public setPaciente(nuevoPaciente:string): void{
    this.nomPaciente = nuevoPaciente; 
  }

  public setEdad(nuevaEdad:number):void{
    this.edad = nuevaEdad; 
  }

  public esExotica():void{
    console.log ("La mascota es exotica ? : ",this.exotica);
  }
 
}



