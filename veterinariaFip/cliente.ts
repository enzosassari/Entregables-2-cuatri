import { Veterinaria } from "./veterinaria";
import { Paciente } from "./paciente";

export class Cliente {
  public idCliente: number;
  public nomCliente: string;
  public telefono: number;
  public VIP: boolean = false; 
  //public mascotas: Paciente[];
  public acuVisitas: number = 0;

  constructor(
    nomCliente: string,
    telefono: number,
  ) {
    this.idCliente = this.generarId();
    this.nomCliente = nomCliente;
    this.telefono = telefono;
    //this.mascotas = [];
  }

  public generarId(): number {
    return Math.floor(Math.random() * 300);
  }

  public getIdCliente(): number{
    return this.idCliente;
  }

  public mostrarID():void{
    console.log("El ID del cliente ",this.getNomCliente(), " es: ", this.getIdCliente());
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

  //METODO PARA CONSULTAS VETERINARIAS Y ACUMULAR VISITAS PARA SER VIP
  public consultaVeterinaria():void{
    this.acuVisitas += 1 ; 
    console.log ("El cliente ", this.nomCliente, "tiene : ",this.acuVisitas," consultas en la veterinaria");
    if (this.acuVisitas>=5){
      this.VIP = true; 
      console.log ("El cliente es *VIP*");
    }
  }
  
  //public agregarMascota(mascotas: Paciente): void {
   // this.mascotas.push(mascotas);
  //}

  //public getMascota(): Paciente[]{
  //   return this.mascotas; 
  //}

  //METODO PARA ELIMINAR MASCOTA
  //public bajaMascota(nomPaciente:string): void{
   //this.mascotas = this.mascotas.filter(mascotas => mascotas.getPaciente() !== nomPaciente); 
  //}

  //public modificarCliente (id:number, nuevoCliente: Cliente){
    //busca el indice con el id
   // const index = this.clientes.findIndex(clientes => clientes.getIdCliente()===id);
  //  this.clientes[index] = nuevoCliente; 
  //}
  
}
