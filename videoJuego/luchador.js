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
exports.Luchador = void 0;
var personaje_1 = require("./personaje");
var Luchador = /** @class */ (function (_super) {
    __extends(Luchador, _super);
    function Luchador(nombre) {
        var _this = _super.call(this, nombre) || this;
        _this.golpeBasico = "¡ Golpe letal !"; //poder exclusivo de luchador
        return _this;
    }
    Luchador.prototype.atacar = function () {
        return console.log("".concat(this.nombre, " ataca x5"));
    };
    Luchador.prototype.defender = function () {
        return console.log("".concat(this.nombre, " defiende x5"));
    };
    Luchador.prototype.lanzarGolpeBasico = function () {
        return console.log("".concat(this.nombre, " lanza ").concat(this.golpeBasico));
    };
    return Luchador;
}(personaje_1.Personaje));
exports.Luchador = Luchador;
