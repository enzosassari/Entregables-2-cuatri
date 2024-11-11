import { CLIENT_RENEG_LIMIT } from "tls";
import { Cliente } from "./cliente";

export class Veterinaria {
  public id: number;
  public nombre: string;
  public direccion: string;
  public clientes: Cliente[];

  constructor(id: number, nombre: string, direccion: string) {
    this.id = id;
    this.nombre = nombre;
    this.direccion = direccion;
    this.clientes = [];
  }

  public getId(): number {
    return this.id;
  }

  public setId(nuevoId: number): void {
    this.id = nuevoId;
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
    this.clientes.forEach(cliente => {
      console.log(`Cliente: ${cliente.nomCliente}`);
      const pacientes = cliente.getMascota();
      pacientes.forEach(paciente => {
        console.log(`  Paciente: ${paciente.nomPaciente} - Especie: ${paciente.especie}`);
      });
    });
  }

  //METODO PARA BUSCAR CLIENTE POR ID
  public buscarClientePorId(id: number) {
    return this.clientes.find((clientes) => clientes.getIdCliente() === id);
  }

  //METODO PARA ELIMINAR CLIENTE
  public bajaCliente(id: number): void {
    this.clientes = this.clientes.filter((clientes) => clientes.getIdCliente() !== id);
  }

  public modificarCliente(id: number, nuevoCliente: Cliente ) {
    //busca el indice con el id
    const index = this.clientes.findIndex((clientes) => clientes.getIdCliente() === id);
    this.clientes[index] = nuevoCliente;
  }

}
