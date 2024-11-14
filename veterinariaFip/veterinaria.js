"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinaria = void 0;
var Veterinaria = /** @class */ (function () {
    function Veterinaria(nombre, direccion) {
        this.id = this.generarId(); //USO METODO GENERAR ID PARA GENERAR UN NUMERO RANDOM
        this.nombre = nombre;
        this.direccion = direccion;
        this.clientes = [];
        this.pacientes = [];
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
        var _this = this;
        this.clientes.forEach(function (cliente) {
            console.log("Cliente: ".concat(cliente.nomCliente, " (ID: ").concat(cliente.idCliente, ")"));
            var pacientesDelCliente = _this.pacientes.filter(function (mascota) { return mascota.idDueno === cliente.idCliente; });
            if (pacientesDelCliente.length > 0) {
                pacientesDelCliente.forEach(function (mascota) {
                    console.log(" Mascota: ".concat(mascota.nomPaciente, " (Especie: ").concat(mascota.especie, ")"));
                });
            }
            else {
                console.log("  No tiene mascotas registradas.");
            }
        });
    };
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
    Veterinaria.prototype.buscarPacientePorId = function (id) {
        return this.pacientes.find(function (pacientes) { return pacientes.getIdPaciente() === id; });
    };
    //METODO PARA AGREGAR MASCOTAS
    Veterinaria.prototype.agregarPaciente = function (mascotas) {
        this.pacientes.push(mascotas);
    };
    Veterinaria.prototype.getPaciente = function () {
        return this.pacientes;
    };
    //METODO PARA ELIMINAR MASCOTA
    Veterinaria.prototype.bajaPaciente = function (nomPaciente) {
        this.pacientes = this.pacientes.filter(function (mascotas) { return mascotas.getPaciente() !== nomPaciente; });
    };
    return Veterinaria;
}());
exports.Veterinaria = Veterinaria;
