"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(patente) {
        this.patente = patente;
    }
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
