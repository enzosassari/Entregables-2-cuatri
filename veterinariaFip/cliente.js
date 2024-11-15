"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(nomCliente, telefono) {
        this.VIP = false;
        this.acuVisitas = 0;
        this.idCliente = this.generarId();
        this.nomCliente = nomCliente;
        this.telefono = telefono;
        this.mascotas = [];
    }
    //METODO PARA GENERAR ID ALEATORIA
    Cliente.prototype.generarId = function () {
        return Math.floor(Math.random() * 300);
    };
    Cliente.prototype.getIdCliente = function () {
        return this.idCliente;
    };
    //METODO PARA MOSTRAR NOMBRE Y ID DEL CLIENTE
    Cliente.prototype.mostrarID = function () {
        console.log("El ID del cliente ", this.getNomCliente(), " es: ", this.getIdCliente());
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
    //METODO PARA CONSULTAS VETERINARIAS Y ACUMULAR VISITAS PARA SER VIP
    Cliente.prototype.consultaVeterinaria = function () {
        this.acuVisitas += 1;
        console.log("El cliente ", this.nomCliente, "tiene : ", this.acuVisitas, " consultas en la veterinaria");
        if (this.acuVisitas >= 5) {
            this.VIP = true;
            console.log("El cliente es *VIP*");
        }
    };
    //METODO PARA AGREGAR MASCOTA
    Cliente.prototype.agregarMascota = function (mascotas) {
        this.mascotas.push(mascotas);
    };
    Cliente.prototype.getMascota = function () {
        return this.mascotas;
    };
    //METODO PARA ELIMINAR MASCOTA
    Cliente.prototype.bajaMascota = function (nomPaciente) {
        this.mascotas = this.mascotas.filter(function (mascotas) { return mascotas.getPaciente() !== nomPaciente; });
    };
    return Cliente;
}());
exports.Cliente = Cliente;
