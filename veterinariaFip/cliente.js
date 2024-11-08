"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(idCliente, nomCliente, telefono, VIP) {
        this.idCliente = idCliente;
        this.nomCliente = nomCliente;
        this.telefono = telefono;
        this.VIP = VIP;
        this.mascotas = [];
    }
    Cliente.prototype.getIdCliente = function () {
        return this.idCliente;
    };
    Cliente.prototype.setIdCliente = function (nuevoIdCliente) {
        this.nomCliente = nuevoIdCliente;
    };
    Cliente.prototype.getNomCliente = function () {
        return this.nomCliente;
    };
    Cliente.prototype.setNomCliente = function (nuevoCliente) {
        this.nomCliente = nuevoCliente;
    };
    Cliente.prototype.getTelefono = function () {
        return this.telefono;
    };
    Cliente.prototype.setTelefono = function (nuevoTelefono) {
        this.telefono = nuevoTelefono;
    };
    Cliente.prototype.agregarMascota = function (mascotas) {
        this.mascotas.push(mascotas);
    };
    Cliente.prototype.getMascota = function () {
        return console.log("Mascota : ", this.mascotas);
    };
    Cliente.prototype.bajaMascota = function (nomPaciente) {
        this.mascotas = this.mascotas.filter(function (mascotas) { return mascotas.getPaciente() !== nomPaciente; });
    };
    return Cliente;
}());
exports.Cliente = Cliente;
