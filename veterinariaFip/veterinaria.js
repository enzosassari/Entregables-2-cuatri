"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinaria = void 0;
var Veterinaria = /** @class */ (function () {
    function Veterinaria(id, nombre, direccion) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.clientes = [];
    }
    Veterinaria.prototype.getId = function () {
        return this.id;
    };
    Veterinaria.prototype.setId = function (nuevoId) {
        this.id = nuevoId;
    };
    Veterinaria.prototype.getNombre = function () {
        return this.nombre;
    };
    Veterinaria.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Veterinaria.prototype.getDireccion = function () {
        return this.direccion;
    };
    Veterinaria.prototype.setDireccion = function (nuevaDireccion) {
        this.direccion = nuevaDireccion;
    };
    Veterinaria.prototype.agregarCliente = function (clientes) {
        this.clientes.push(clientes);
    };
    //METODO PARA MOSTRAR CLIENTES Y SUS MASCOTAS 
    Veterinaria.prototype.getCliente = function () {
        this.clientes.forEach(function (cliente) {
            console.log("Cliente: ".concat(cliente.nomCliente));
            var pacientes = cliente.getMascota();
            pacientes.forEach(function (paciente) {
                console.log("  Paciente: ".concat(paciente.nomPaciente, " - Especie: ").concat(paciente.especie));
            });
        });
    };
    //METODO PARA BUSCAR CLIENTE POR ID
    Veterinaria.prototype.buscarClientePorId = function (id) {
        return this.clientes.find(function (clientes) { return clientes.getIdCliente() === id; });
    };
    //METODO PARA ELIMINAR CLIENTE
    Veterinaria.prototype.bajaCliente = function (id) {
        this.clientes = this.clientes.filter(function (clientes) { return clientes.getIdCliente() !== id; });
    };
    Veterinaria.prototype.modificarCliente = function (id, nuevoCliente) {
        //busca el indice con el id
        var index = this.clientes.findIndex(function (clientes) { return clientes.getIdCliente() === id; });
        this.clientes[index] = nuevoCliente;
    };
    return Veterinaria;
}());
exports.Veterinaria = Veterinaria;
