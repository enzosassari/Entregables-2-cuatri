"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
var Paciente = /** @class */ (function () {
    function Paciente(nomPaciente, especie) {
        this.nomPaciente = nomPaciente;
        this.especie = especie;
    }
    Paciente.prototype.getPaciente = function () {
        return this.nomPaciente;
    };
    return Paciente;
}());
exports.Paciente = Paciente;
