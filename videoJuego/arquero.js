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
exports.Arquero = void 0;
var personaje_1 = require("./personaje");
var Arquero = /** @class */ (function (_super) {
    __extends(Arquero, _super);
    function Arquero(nombre) {
        var _this = _super.call(this, nombre) || this;
        _this.flechaBasica = " Golpe con flecha! ";
        return _this;
    }
    Arquero.prototype.atacar = function () {
        return console.log("".concat(this.nombre, " ataca x15"));
    };
    Arquero.prototype.defender = function () {
        return console.log("".concat(this.nombre, " defiende x15"));
    };
    Arquero.prototype.lanzarFlechaBasica = function () {
        return console.log("".concat(this.nombre, " lanza ").concat(this.flechaBasica));
    };
    return Arquero;
}(personaje_1.Personaje));
exports.Arquero = Arquero;
