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
exports.ArqueroEvolucion = void 0;
var arquero_1 = require("./arquero");
var ArqueroEvolucion = /** @class */ (function (_super) {
    __extends(ArqueroEvolucion, _super);
    function ArqueroEvolucion(nombre) {
        var _this = _super.call(this, nombre) || this;
        _this.flechaEvolucionado = " Golpe con flecha de fuego! ";
        _this.puntosDeVida = 250;
        _this.nivel = 2;
        return _this;
    }
    ArqueroEvolucion.prototype.lanzarFlechaEvolucionada = function () {
        return console.log("".concat(this.nombre, " lanza ").concat(this.flechaEvolucionado));
    };
    return ArqueroEvolucion;
}(arquero_1.Arquero));
exports.ArqueroEvolucion = ArqueroEvolucion;
