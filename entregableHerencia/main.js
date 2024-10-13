"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Auto_1 = require("./Auto");
var Moto_1 = require("./Moto");
var Camion_1 = require("./Camion");
var registro_1 = require("./registro");
//main se usa solo para instanciar 
//creo motos
var moto1 = new Moto_1.Moto(250, "ABJ123", "YAMAHA", "XTZ");
var moto2 = new Moto_1.Moto(200, "AWK456", "BETA", "TR");
var moto3 = new Moto_1.Moto(125, "JKL123", "HONDA", "XR");
//creo autos
var auto1 = new Auto_1.Auto(5, "KUP441", "VOLKSWAGEN", "GOL");
var auto2 = new Auto_1.Auto(3, "DJI434", "FORD", "KA");
var auto3 = new Auto_1.Auto(2, "KPK434", "CHEVROLET", "S10");
//creo camiones
var camion1 = new Camion_1.Camion(13000, "ABC123", "MERCEDES BENZ", "1720");
var camion2 = new Camion_1.Camion(12000, "MJI474", "IVECO", "TECTOR");
var camion3 = new Camion_1.Camion(11000, "HGA969", "SCANIA", "440CV");
//creo registro 
var registro = new registro_1.Registro("Registro automotor 403");
//agrego motos al registro
registro.agregarMoto(moto1);
registro.agregarMoto(moto2);
registro.agregarMoto(moto3);
//agrego autos al registro
registro.agregarAuto(auto1);
registro.agregarAuto(auto2);
registro.agregarAuto(auto3);
//agrego camiones al registro
registro.agregarCamion(camion1);
registro.agregarCamion(camion2);
registro.agregarCamion(camion3);
//ver lista de motos en el registro por patente
console.log("Motos en el registro: ", registro.obtenerMotos());
console.log("--------------------------------");
//quitar moto por patente "ABJ123"
registro.quitarMoto("ABJ123");
console.log("Motos en el registro luego de eliminar vehiculo patente ABJ123 : ", registro.obtenerMotos());
console.log("--------------------------------");
//modificar moto por patente "AWK456"
var nuevaMoto = new Moto_1.Moto(600, "AWK456", "HONDA", "CB600");
registro.modificarMoto("AWK456", nuevaMoto);
//ver lista completa de motos en el registro
console.log("Motos en el registro luego de modificar vehiculo patente AWK456: ", registro.obtenerMotos());
console.log("--------------------------------");
//ver listado completo de autos
console.log("Listado de autos antes de modificar: ", registro.obtenerAutos());
console.log("--------------------------------");
//modificar auto por patente "kup441"
var nuevoAuto = new Auto_1.Auto(3, "kup441", "RENAULT", "CLIO");
registro.modificarAuto("KUP441", nuevoAuto);
//ver listado completo de autos
console.log("Listado de autos luego de modificar vehiculo patente kup441: ", registro.obtenerAutos());
console.log("--------------------------------");
