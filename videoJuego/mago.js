"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
var ataque_1 = require("./ataque");
var personaje_1 = require("./personaje");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nombre, ataque) {
        return _super.call(this, nombre, ataque) || this;
    }
    Mago.prototype.evolucionar = function () {
        this.nivel += 1;
        this.ataque = new ataque_1.Ataque("Telekinesis", 500);
        this.defensa += 5; // Aumenta defensa en 5 puntos
        console.log("".concat(this.nombre, " ha evolucionado. Nueva defensa: ").concat(this.defensa, ". El nivel ahora es: ").concat(this.nivel));
        console.log(this.ataque.descripcionAtaque());
    };
    return Mago;
}(personaje_1.Personaje));
exports.Mago = Mago;
