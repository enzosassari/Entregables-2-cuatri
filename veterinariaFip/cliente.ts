import { Veterinaria } from "./veterinaria";
import { Paciente } from "./paciente";

export class Cliente {
  protected idCliente: number;
  protected nomCliente: string;
  protected telefono: number;
  protected VIP: number;
  protected mascotas: Paciente[];

  constructor(
    idCliente: number,
    nomCliente: string,
    telefono: number,
    VIP: number,
  ) {
    this.idCliente = idCliente;
    this.nomCliente = nomCliente;
    this.telefono = telefono;
    this.VIP = VIP;
    this.mascotas = [];
  }

  public getIdCliente(): number {
    return this.idCliente;
  }

  public setIdCliente(nuevoIdCliente: string) {
    this.nomCliente = nuevoIdCliente;
  }

  public getNomCliente(): string {
    return this.nomCliente;
  }

  public setNomCliente(nuevoCliente: string) {
    this.nomCliente = nuevoCliente;
  }

  public getTelefono(): number {
    return this.telefono;
  }

  public setTelefono(nuevoTelefono: number) {
    this.telefono = nuevoTelefono;
  }

  public agregarMascota(mascotas: Paciente): void {
    this.mascotas.push(mascotas);
  }

  public getMascota(): void{
     return console.log("Mascota : ", this.mascotas); 
  }

  public bajaMascota(nomPaciente:string): void{
   this.mascotas = this.mascotas.filter(mascotas => mascotas.getPaciente() !== nomPaciente); 
  }

  //public modificarCliente (id:number, nuevoCliente: Cliente){
    //busca el indice con el id
   // const index = this.clientes.findIndex(clientes => clientes.getIdCliente()===id);
  //  this.clientes[index] = nuevoCliente; 
  //}
  
}
