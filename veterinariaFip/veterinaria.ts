import { CLIENT_RENEG_LIMIT } from "tls";
import { Cliente } from "./cliente";
import { Paciente } from "./paciente";

export class Veterinaria {
  public id: number;
  public nombre: string;
  public direccion: string;
  public clientes: Cliente[];
  public pacientes: Paciente[]; 

  constructor(nombre: string, direccion: string) {
    this.id = this.generarId(); //USO METODO GENERAR ID PARA GENERAR UN NUMERO RANDOM
    this.nombre = nombre;
    this.direccion = direccion;
    this.clientes = [];
    this.pacientes = []; 
  }

  //METODO PARA GENERAR ID ALEATORIA
  public generarId(): number {
    return Math.floor(Math.random() * 300);
  }

  public getId(): number {
    return this.id;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public setNombre(nuevoNombre: string) {
    this.nombre = nuevoNombre;
  }

  public getDireccion(): string {
    return this.direccion;
  }

  public setDireccion(nuevaDireccion: string) {
    this.direccion = nuevaDireccion;
  }

  public agregarCliente(clientes: Cliente): void {
    this.clientes.push(clientes);
  }

  //METODO PARA MOSTRAR CLIENTES Y SUS MASCOTAS 
  public getCliente(): void {
    this.clientes.forEach(cliente => { console.log(`Cliente: ${cliente.nomCliente} (ID: ${cliente.idCliente})`);
      const pacientesDelCliente = this.pacientes.filter(mascota => mascota.idDueno === cliente.idCliente);
      if (pacientesDelCliente.length > 0) {
        pacientesDelCliente.forEach(mascota => {console.log(` Mascota: ${mascota.nomPaciente} (Especie: ${mascota.especie})`);
      });
      } else {
        console.log(`  No tiene mascotas registradas.`);
      }
    });
  }

  //METODO PARA MOSTRAR CLIENTES Y SUS MASCOTAS
  //public getCliente(): void {
    //this.clientes.forEach((cliente) => {
    //  console.log(`Cliente: ${cliente.nomCliente}`);
     // const pacientes = cliente.getMascota();
    //  pacientes.forEach((paciente) => {
     //   console.log(
     //     `  Paciente: ${paciente.nomPaciente} - Especie: ${paciente.especie}`
     //   );
     // });
   // });
 // }

  //METODO PARA BUSCAR CLIENTE POR ID
  public buscarClientePorId(id: number) {
    return this.clientes.find((clientes) => clientes.getIdCliente() === id);
  }

  //METODO PARA ELIMINAR CLIENTE
  public bajaCliente(id: number): void {
    this.clientes = this.clientes.filter((clientes) => clientes.getIdCliente() !== id);
  }

  //METODO PARA MODIFICAR CLIENTE 
  public modificarCliente(id: number, nuevoNombre?: string, nuevoTelefono?: number): void {
    const cliente = this.clientes.find (cliente => cliente.getIdCliente()===id);
    if (cliente){
      if (nuevoNombre) cliente.nomCliente = nuevoNombre;
      if (nuevoTelefono) cliente.telefono = nuevoTelefono; 
      console.log (`Cliente con id '${id}' modificado`);
      }else{
        console.log (`Cliente con id '${id}' no encontrado`); 
      }
    }


    public buscarPacientePorId(id: number) {
      return this.pacientes.find((pacientes) => pacientes.getIdPaciente() === id);
    }

    //METODO PARA AGREGAR MASCOTAS
    public agregarPaciente(mascotas: Paciente): void {
      this.pacientes.push(mascotas);
    }

    public getPaciente(): Paciente[]{
      return this.pacientes; 
    }

    //METODO PARA ELIMINAR MASCOTA
    public bajaPaciente(nomPaciente:string): void{
      this.pacientes = this.pacientes.filter(mascotas => mascotas.getPaciente() !== nomPaciente); 
    }

}


