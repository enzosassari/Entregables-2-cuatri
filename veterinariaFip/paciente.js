"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
var Paciente = /** @class */ (function () {
    function Paciente(nomPaciente, especie, edad) {
        this.exotica = false;
        this.nomPaciente = nomPaciente;
        this.setEspecie(especie);
        this.edad = edad;
    }
    Paciente.prototype.getPaciente = function () {
        return this.nomPaciente;
    };
    Paciente.prototype.getExotica = function () {
        return this.exotica;
    };
    Paciente.prototype.getEspecie = function () {
        return this.especie;
    };
    Paciente.prototype.setEspecie = function (nuevaEspecie) {
        this.especie = nuevaEspecie;
        if ((nuevaEspecie != "perro") && (nuevaEspecie != "gato")) {
            this.exotica = true;
        }
        else {
            this.exotica = false;
        }
    };
    Paciente.prototype.setPaciente = function (nuevoPaciente) {
        this.nomPaciente = nuevoPaciente;
    };
    Paciente.prototype.setEdad = function (nuevaEdad) {
        this.edad = nuevaEdad;
    };
    Paciente.prototype.esExotica = function () {
        console.log("La mascota es exotica ? : ", this.exotica);
    };
    return Paciente;
}());
exports.Paciente = Paciente;
