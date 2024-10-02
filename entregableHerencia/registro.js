"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registro = void 0;
var Registro = /** @class */ (function () {
    function Registro(nombreRegistro) {
        this.nombreRegistro = nombreRegistro;
        this.autos = []; //por defecto le pongo un listado vacio
        this.motos = []; //por defecto le pongo un listado vacio
        this.camiones = []; //por defecto le pongo un listado vacio
    }
    Registro.prototype.getNombre = function () {
        return this.nombreRegistro;
    };
    Registro.prototype.agregarMoto = function (motos) {
        this.motos.push(motos);
    };
    Registro.prototype.agregarAuto = function (autos) {
        this.autos.push(autos);
    };
    Registro.prototype.agregarCamion = function (camiones) {
        this.camiones.push(camiones);
    };
    Registro.prototype.obtenerMotos = function () {
        return this.motos;
    };
    Registro.prototype.obtenerAutos = function () {
        return this.autos;
    };
    Registro.prototype.obtenerCamiones = function () {
        return this.camiones;
    };
    Registro.prototype.quitarMoto = function (patente) {
        this.motos = this.motos.filter(function (motos) { return motos.getPatente() !== patente; });
        //filter te crea un nuevo arreglo con patentes distintos al parametro que le pase y lo asigna a this.motos
    };
    Registro.prototype.quitarAuto = function (patente) {
        this.autos = this.autos.filter(function (autos) { return autos.getPatente() !== patente; });
    };
    Registro.prototype.quitarCamion = function (patente) {
        this.camiones = this.camiones.filter(function (camiones) { return camiones.getPatente() !== patente; });
    };
    Registro.prototype.modificarMoto = function (patente, nuevaMoto) {
        // Buscar el índice de la moto con la patente 
        var index = this.motos.findIndex(function (motos) { return motos.getPatente() === patente; });
        if (index !== -1) {
            // Modificar el registro en ese índice
            this.motos[index] = nuevaMoto;
            return true; // Indica que la modificación fue exitosa
        }
        else {
            console.log("No se encontr\u00F3 una moto con la patente: ".concat(patente));
            return false; // Indica que no se encontró la moto
        }
    };
    Registro.prototype.modificarAuto = function (patente, nuevoAuto) {
        // Buscar el índice con la patente
        var index = this.autos.findIndex(function (autos) { return autos.getPatente() === patente; });
        if (index !== -1) {
            // Modificar el registro en ese índice
            this.autos[index] = nuevoAuto;
            return true; // Indica que la modificación fue exitosa
        }
        else {
            console.log("No se encontr\u00F3 una moto con la patente: ".concat(patente));
            return false; // Indica que no se encontró la moto
        }
    };
    Registro.prototype.modificarCamion = function (patente, nuevoCamion) {
        // Buscar el índice con la patente
        var index = this.camiones.findIndex(function (camiones) { return camiones.getPatente() === patente; });
        if (index !== -1) {
            // Modificar el registro en ese índice
            this.camiones[index] = nuevoCamion;
            return true; // Indica que la modificación fue exitosa
        }
        else {
            console.log("No se encontr\u00F3 una moto con la patente: ".concat(patente));
            return false; // Indica que no se encontró la moto
        }
    };
    return Registro;
}());
exports.Registro = Registro;
