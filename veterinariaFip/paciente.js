"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
var Paciente = /** @class */ (function () {
    function Paciente(nomPaciente, especie, idDueno) {
        this.nomPaciente = nomPaciente;
        this.especie = especie;
        this.idDueno = idDueno;
    }
    Paciente.prototype.getPaciente = function () {
        return this.nomPaciente;
    };
    Paciente.prototype.getIdPaciente = function () {
        return this.idDueno;
    };
    Paciente.prototype.mostrarIdPaciente = function () {
        console.log("El ID del cliente ", this.nomPaciente, " es: ", this.idDueno);
    };
    return Paciente;
}());
exports.Paciente = Paciente;
