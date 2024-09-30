"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Moto = /** @class */ (function () {
    function Moto(patente, marca, modelo) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
    }
    Moto.prototype.getPatente = function () {
        return this.patente;
    };
    Moto.prototype.getMarca = function () {
        return this.marca;
    };
    Moto.prototype.getModelo = function () {
        return this.modelo;
    };
    return Moto;
}());
exports.Moto = Moto;
