"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Red = void 0;
var Red = /** @class */ (function () {
    function Red() {
        this.veterinarias = [];
        this.proveedores = [];
    }
    Red.prototype.altaVeterinaria = function (veterinaria) {
        this.veterinarias.push(veterinaria);
    };
    Red.prototype.bajaVeterinaria = function (nombre) {
        this.veterinarias = this.veterinarias.filter(function (veterinarias) { return veterinarias.getNombre() !== nombre; });
    };
    Red.prototype.mostrarVeterinarias = function () {
        console.log("Las veterinarias son : ", this.veterinarias);
    };
    Red.prototype.modificarVeterinaria = function (id, nuevoNombre, nuevaDireccion) {
        var veterinaria = this.veterinarias.find(function (vet) { return vet.getId() === id; });
        if (veterinaria) {
            if (nuevoNombre)
                veterinaria.nombre = nuevoNombre;
            if (nuevaDireccion)
                veterinaria.direccion = nuevaDireccion;
            console.log("Veterinaria con id '".concat(id, "' modificada."));
        }
        else {
            console.log("Veterinaria con id '".concat(id, "' no encontrada."));
        }
    };
    Red.prototype.altaProveedor = function (proveedor) {
        this.proveedores.push(proveedor);
    };
    Red.prototype.mostrarProveedores = function () {
        console.log("Los proveedores son  : ", this.proveedores);
    };
    return Red;
}());
exports.Red = Red;
