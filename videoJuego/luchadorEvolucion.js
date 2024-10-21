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
exports.LuchadorEvolucion = void 0;
var luchador_1 = require("./luchador");
var LuchadorEvolucion = /** @class */ (function (_super) {
    __extends(LuchadorEvolucion, _super);
    function LuchadorEvolucion(nombre) {
        var _this = _super.call(this, nombre) || this;
        _this.golpeEvolucionado = "¡Golpe mortal!";
        _this.puntosDeVida = 300; //evoluciona y le damos mas puntos de vida
        _this.nivel = 2; //pasa a nivel 2 
        return _this;
    }
    LuchadorEvolucion.prototype.lanzarGolpeEvolucionado = function () {
        return console.log("".concat(this.nombre, " lanza ").concat(this.golpeEvolucionado));
    };
    return LuchadorEvolucion;
}(luchador_1.Luchador));
exports.LuchadorEvolucion = LuchadorEvolucion;
