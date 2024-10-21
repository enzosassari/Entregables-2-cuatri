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
exports.MagoEvolucion = void 0;
var mago_1 = require("./mago");
var MagoEvolucion = /** @class */ (function (_super) {
    __extends(MagoEvolucion, _super);
    function MagoEvolucion(nombre) {
        var _this = _super.call(this, nombre) || this;
        _this.hechizoEvolucionado = "<-<-<-Telekinesis->->->"; //poder exclusivo de la evolucion de mago
        _this.puntosDeVida = 200; // le damos el doble de vida con la evolucion 
        _this.nivel = 2; //le damos el nivel 2 con la evolucion 
        return _this;
    }
    //Metodo del poder exclusivo de los magos evolucionados 
    MagoEvolucion.prototype.lanzarHechizoEvolucionado = function () {
        return console.log("".concat(this.nombre, " lanza  ").concat(this.hechizoEvolucionado, " "));
    };
    return MagoEvolucion;
}(mago_1.Mago));
exports.MagoEvolucion = MagoEvolucion;
