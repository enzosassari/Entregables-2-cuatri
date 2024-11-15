import { Proveedor } from "./proveedor";
import { Veterinaria } from "./veterinaria"

export class Red {

    public veterinarias : Veterinaria[];  
    public proveedores : Proveedor[]; 

    constructor(){
        this.veterinarias = []; 
        this.proveedores = []; 
    }

    public altaVeterinaria (veterinaria: Veterinaria): void{
        this.veterinarias.push(veterinaria);  
    }

    public bajaVeterinaria (nombre : string): void{
        this.veterinarias = this.veterinarias.filter( veterinarias => veterinarias.getNombre() !== nombre); 
    }

    public mostrarVeterinarias(): void {
        console.log ("Las veterinarias son : ", this.veterinarias); 
    }

    public modificarVeterinaria(id: number, nuevoNombre?: string, nuevaDireccion?: string): void {
        const veterinaria = this.veterinarias.find(vet => vet.getId() === id);
        if (veterinaria) {
          if (nuevoNombre) veterinaria.nombre = nuevoNombre;
          if (nuevaDireccion) veterinaria.direccion = nuevaDireccion;
          console.log(`Veterinaria con id '${id}' modificada.`);
        } else {
          console.log(`Veterinaria con id '${id}' no encontrada.`);
        }
      }

      public altaProveedor (proveedor: Proveedor): void{
        this.proveedores.push (proveedor);  
      }

      public mostrarProveedores(): void {
        console.log ("Los proveedores son  : ", this.proveedores); 
     }
}   






