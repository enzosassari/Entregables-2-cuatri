import { Cliente } from "./cliente";

export class Veterinaria {
  protected id: number;
  protected nombre: string;
  protected direccion: string;
  protected clientes: Cliente[];

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

  public getCliente(): Cliente[] {
    return this.clientes;
  }

  public buscarClientePorId(id: number) {
    return this.clientes.find((clientes) => clientes.getIdCliente() === id);
  }

  public bajaCliente(id: number): void {
    this.clientes = this.clientes.filter((clientes) => clientes.getIdCliente() !== id);
  }

  public modificarCliente(id: number, nuevoCliente: Cliente) {
    //busca el indice con el id
    const index = this.clientes.findIndex((clientes) => clientes.getIdCliente() === id);
    this.clientes[index] = nuevoCliente;
  }
}
