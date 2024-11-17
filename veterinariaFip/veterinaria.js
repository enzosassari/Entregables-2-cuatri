"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinaria = void 0;
var Veterinaria = /** @class */ (function () {
    function Veterinaria(nombre, direccion) {
        this.id = this.generarId(); //USO METODO GENERAR ID PARA GENERAR UN NUMERO RANDOM
        this.nombre = nombre;
        this.direccion = direccion;
        this.clientes = [];
    }
    //METODO PARA GENERAR ID ALEATORIA
    Veterinaria.prototype.generarId = function () {
        return Math.floor(Math.random() * 300);
    };
    Veterinaria.prototype.getId = function () {
        return this.id;
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
    //METODO PARA MODIFICAR CLIENTE
    Veterinaria.prototype.modificarCliente = function (id, nuevoNombre, nuevoTelefono) {
        var cliente = this.clientes.find(function (cliente) { return cliente.getIdCliente() === id; });
        if (cliente) {
            if (nuevoNombre)
                cliente.nomCliente = nuevoNombre;
            if (nuevoTelefono)
                cliente.telefono = nuevoTelefono;
            console.log("Cliente con id '".concat(id, "' modificado"));
        }
        else {
            console.log("Cliente con id '".concat(id, "' no encontrado"));
        }
    };
    return Veterinaria;
}());
exports.Veterinaria = Veterinaria;
