"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ataque = void 0;
var Ataque = /** @class */ (function () {
    function Ataque(tipo, poder) {
        this.tipo = tipo;
        this.poder = poder;
    }
    Ataque.prototype.descripcionAtaque = function () {
        return console.log("El nuevo ataque es : ".concat(this.tipo, " con poder de ").concat(this.poder));
    };
    return Ataque;
}());
exports.Ataque = Ataque;
