
export class Proveedor {
    public nomProveedor: string;
    public telefono: number;
    public idProveedor: number;

    constructor (nomProveedor:string, telefono:number){
        this.nomProveedor = nomProveedor;
        this.telefono = telefono;
        this.idProveedor = this.generarId(); 
    }

     //METODO PARA GENERAR ID ALEATORIA
    public generarId(): number {
        return Math.floor(Math.random() * 300);
    }

    public getNomProveedor(): string {
        return this.nomProveedor; 
    }

    public getTelefono(): number{
        return this.telefono; 
    }

    public getId(): number{
        return this.idProveedor; 
    }


}