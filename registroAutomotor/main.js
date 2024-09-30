"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Auto_1 = require("./Auto");
var Moto_1 = require("./Moto");
var Camion_1 = require("./Camion");
var registro_1 = require("./registro");
//main se usa solo para instanciar 
//creo motos
var moto1 = new Moto_1.Moto("ABC123", "Zanella", "Cecato");
var moto2 = new Moto_1.Moto("wdj123", "Beta", "tr200");
var moto3 = new Moto_1.Moto("hij456", "Yamaha", "xtz150");
//creo autos
var auto1 = new Auto_1.Auto("ab123cd", "Fiat", "Strada");
var auto2 = new Auto_1.Auto("kup441", "Volkswagen", "Gol");
var auto3 = new Auto_1.Auto("ncj401", "Ford", "Ranger");
//creo camiones
var camion1 = new Camion_1.Camion("kpx474", "Mercedes Benz", "1720");
var camion2 = new Camion_1.Camion("klm222", "Iveco", "Tector 330");
var camion3 = new Camion_1.Camion("opk123", "Scania", "440");
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
console.log("Motos en el registro: ", registro.obtenerMotos().map(function (motos) { return motos.getPatente(); }));
//quitar moto por patente "ABC123"
registro.quitarMoto("ABC123");
console.log("Motos en el registro luego de eliminar ABC123 : ", registro.obtenerMotos().map(function (motos) { return motos.getPatente(); }));
//modificar moto por patente "wdj123"
var nuevaMoto = new Moto_1.Moto("wdj123", "Honda", "CB650R");
registro.modificarMoto("wdj123", nuevaMoto);
//ver lista completa de motos en el registro
console.log("Motos en el registro luego de modificar wdj123: ", registro.obtenerMotos());
//ver listado completo de autos
console.log("Listado de autos antes de modificar: ", registro.obtenerAutos());
//modificar auto por patente "kup441"
var nuevoAuto = new Auto_1.Auto("kup441", "Fiat", "Toro");
registro.modificarAuto("kup441", nuevoAuto);
//ver listado completo de autos
console.log("Listado de autos luego de modificar kup441: ", registro.obtenerAutos());
