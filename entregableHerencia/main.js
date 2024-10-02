"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Auto_1 = require("./Auto");
var Moto_1 = require("./Moto");
var Camion_1 = require("./Camion");
var registro_1 = require("./registro");
//main se usa solo para instanciar 
//creo motos
var moto1 = new Moto_1.Moto("Zanella", "Cecato", "ABC123");
var moto2 = new Moto_1.Moto("Beta", "tr200", "wdj123");
var moto3 = new Moto_1.Moto("Yamaha", "xtz150", "hij456");
//creo autos
var auto1 = new Auto_1.Auto("Fiat", "Strada", "ab123cd");
var auto2 = new Auto_1.Auto("Volkswagen", "Gol", "kup441");
var auto3 = new Auto_1.Auto("Ford", "Ranger", "ncj401");
//creo camiones
var camion1 = new Camion_1.Camion("Mercedes Benz", "1720", "kpx474");
var camion2 = new Camion_1.Camion("Iveco", "Tector 330", "klm222");
var camion3 = new Camion_1.Camion("Scania", "440", "opk123");
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
//quitar moto por patente "ABC123"
registro.quitarMoto("ABC123");
console.log("Motos en el registro luego de eliminar vehiculo patente ABC123 : ", registro.obtenerMotos());
console.log("--------------------------------");
//modificar moto por patente "wdj123"
var nuevaMoto = new Moto_1.Moto("Honda", "CB650R", "wdj123");
registro.modificarMoto("wdj123", nuevaMoto);
//ver lista completa de motos en el registro
console.log("Motos en el registro luego de modificar vehiculo patente wdj123: ", registro.obtenerMotos());
console.log("--------------------------------");
//ver listado completo de autos
console.log("Listado de autos antes de modificar: ", registro.obtenerAutos());
console.log("--------------------------------");
//modificar auto por patente "kup441"
var nuevoAuto = new Auto_1.Auto("Fiat", "Toro", "kup441");
registro.modificarAuto("kup441", nuevoAuto);
//ver listado completo de autos
console.log("Listado de autos luego de modificar vehiculo patente kup441: ", registro.obtenerAutos());
console.log("--------------------------------");
