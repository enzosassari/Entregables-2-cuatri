
import { Auto } from './Auto';
import { Moto } from './Moto';
import { Camion } from './Camion';

export class Registro {
    private nombreRegistro:string; 
    private autos: Auto[];   //listado de autos
    private motos: Moto[];   //listado de motos
    private camiones: Camion[]; //listado de camiones

    constructor(nombreRegistro:string ){
        this.nombreRegistro = nombreRegistro;
        this.autos = [] ;     //por defecto le pongo un listado vacio
        this.motos = [] ;     //por defecto le pongo un listado vacio
        this.camiones = [] ;  //por defecto le pongo un listado vacio
    }

    getNombre():string{
        return this.nombreRegistro;
    }

    agregarMoto(motos:Moto):void{
        this.motos.push(motos); 
    }

    agregarAuto(autos:Auto):void{
        this.autos.push(autos);
    }

    agregarCamion(camiones:Camion):void{
        this.camiones.push(camiones);
    }

    obtenerMotos(): Moto[]{
        return this.motos;
    }

    obtenerAutos(): Auto[]{
        return this.autos;
    }

    obtenerCamiones(): Camion[]{
        return this.camiones;
    }

    quitarMoto(patente:string): void{
        this.motos=this.motos.filter(motos => motos.getPatente() !== patente); 
        //filter te crea un nuevo arreglo con patentes distintos al parametro que le pase y lo asigna a this.motos
    }

    quitarAuto(patente:string): void{
        this.autos=this.autos.filter(autos => autos.getPatente() !== patente); 
    }
    
    quitarCamion(patente:string): void{
        this.camiones=this.camiones.filter(camiones => camiones.getPatente() !== patente); 
    }

    modificarMoto(patente: string, nuevaMoto: Moto): boolean {
        // Buscar el índice de la moto con la patente 
        const index = this.motos.findIndex(motos => motos.getPatente() === patente);

        if (index !== -1) {
            // Modificar el registro en ese índice
            this.motos[index] = nuevaMoto;
            return true; // Indica que la modificación fue exitosa
        } else {
            console.log(`No se encontró una moto con la patente: ${patente}`);
            return false; // Indica que no se encontró la moto
        }
    }

    modificarAuto(patente: string, nuevoAuto: Auto): boolean {
        // Buscar el índice con la patente
        const index = this.autos.findIndex(autos => autos.getPatente() === patente);

        if (index !== -1) {
            // Modificar el registro en ese índice
            this.autos[index] = nuevoAuto;
            return true; // Indica que la modificación fue exitosa
        } else {
            console.log(`No se encontró una moto con la patente: ${patente}`);
            return false; // Indica que no se encontró la moto
        }
    }

    modificarCamion(patente: string, nuevoCamion: Camion): boolean {
        // Buscar el índice con la patente
        const index = this.camiones.findIndex(camiones => camiones.getPatente() === patente);

        if (index !== -1) {
            // Modificar el registro en ese índice
            this.camiones[index] = nuevoCamion;
            return true; // Indica que la modificación fue exitosa
        } else {
            console.log(`No se encontró una moto con la patente: ${patente}`);
            return false; // Indica que no se encontró la moto
        }
    }
}



