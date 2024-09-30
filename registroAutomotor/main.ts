
import { Auto } from './Auto';
import { Moto } from './Moto';
import { Camion } from './Camion';
import { Registro } from './registro';

//main se usa solo para instanciar 

//creo motos
const moto1 = new Moto ("ABC123","Zanella","Cecato");
const moto2 = new Moto ("wdj123","Beta","tr200");
const moto3 = new Moto ("hij456","Yamaha","xtz150");

//creo autos
const auto1 = new Auto ("ab123cd","Fiat","Strada"); 
const auto2 = new Auto ("kup441","Volkswagen", "Gol"); 
const auto3 = new Auto ("ncj401","Ford", "Ranger"); 

//creo camiones
const camion1 = new Camion ("kpx474","Mercedes Benz","1720"); 
const camion2 = new Camion ("klm222","Iveco","Tector 330");
const camion3 = new Camion ("opk123", "Scania","440"); 

//creo registro 
const registro = new Registro ("Registro automotor 403"); 

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
console.log("Motos en el registro: ",registro.obtenerMotos().map(motos => motos.getPatente()));

//quitar moto por patente "ABC123"
registro.quitarMoto("ABC123"); 
console.log("Motos en el registro luego de eliminar ABC123 : ", registro.obtenerMotos().map(motos => motos.getPatente()));

//modificar moto por patente "wdj123"
const nuevaMoto = new Moto("wdj123", "Honda", "CB650R");
registro.modificarMoto("wdj123", nuevaMoto);

//ver lista completa de motos en el registro
console.log("Motos en el registro luego de modificar wdj123: ", registro.obtenerMotos()); 

//ver listado completo de autos
console.log("Listado de autos antes de modificar: ", registro.obtenerAutos()); 

//modificar auto por patente "kup441"
const nuevoAuto = new Auto("kup441", "Fiat", "Toro");
registro.modificarAuto("kup441",nuevoAuto); 

//ver listado completo de autos
console.log("Listado de autos luego de modificar kup441: ", registro.obtenerAutos()); 