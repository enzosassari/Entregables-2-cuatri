"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(nombre, ataque) {
        this.nivel = 1; //nivel de personaje (todos arrancan con 1)
        this.puntosDeVida = 100; //puntos de vida (todos arrancan con 100)
        this.defensa = 20;
        this.nombre = nombre;
        this.ataque = ataque;
    }
    Personaje.prototype.getVida = function () {
        return console.log("la vida de ".concat(this.nombre, " es de ").concat(this.puntosDeVida));
    };
    Personaje.prototype.getNivel = function () {
        return console.log("El nivel del personaje es ".concat(this.nivel));
    };
    Personaje.prototype.setVida = function (vida) {
        if (vida < 500 && vida > 0)
            this.puntosDeVida = vida;
    };
    return Personaje;
}());
exports.Personaje = Personaje;
