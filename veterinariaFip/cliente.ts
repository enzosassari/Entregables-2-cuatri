import { Veterinaria } from "./veterinaria";
import { Paciente } from "./paciente";

export class Cliente {
  public idCliente: number;
  public nomCliente: string;
  public telefono: number;
  public VIP: boolean = false; 
  public mascotas: Paciente[];
  public acuVisitas: number = 0;

  constructor(
    nomCliente: string,
    telefono: number,
  ) {
    this.idCliente = this.generarId();
    this.nomCliente = nomCliente;
    this.telefono = telefono;
    this.mascotas = [];
  }
  
  //METODO PARA GENERAR ID ALEATORIA
  public generarId(): number {
    return Math.floor(Math.random() * 300);
  }

  public getIdCliente(): number{
    return this.idCliente;
  }

  //METODO PARA MOSTRAR NOMBRE Y ID DEL CLIENTE
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
  
  //METODO PARA AGREGAR MASCOTA
  public agregarMascota(mascotas: Paciente): void {
    this.mascotas.push(mascotas);
  }

  public getMascota(): Paciente[]{
     return this.mascotas; 
  }

  //METODO PARA ELIMINAR MASCOTA
  public bajaMascota(nomPaciente:string): void{
   this.mascotas = this.mascotas.filter(mascotas => mascotas.getPaciente() !== nomPaciente); 
  }


}

