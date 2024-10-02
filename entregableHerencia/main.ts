
import { Auto } from './Auto';
import { Moto } from './Moto';
import { Camion } from './Camion';
import { Registro } from './registro';

//main se usa solo para instanciar 

//creo motos
const moto1 = new Moto ("Zanella","Cecato","ABC123");
const moto2 = new Moto ("Beta","tr200","wdj123");
const moto3 = new Moto ("Yamaha","xtz150","hij456");


//creo autos
const auto1 = new Auto ("Fiat","Strada","ab123cd"); 
const auto2 = new Auto ("Volkswagen", "Gol","kup441"); 
const auto3 = new Auto ("Ford", "Ranger","ncj401"); 

//creo camiones
const camion1 = new Camion ("Mercedes Benz","1720","kpx474"); 
const camion2 = new Camion ("Iveco","Tector 330","klm222");
const camion3 = new Camion ("Scania","440","opk123"); 

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
console.log("Motos en el registro: ",registro.obtenerMotos());
console.log ("--------------------------------");

//quitar moto por patente "ABC123"
registro.quitarMoto("ABC123"); 
console.log("Motos en el registro luego de eliminar vehiculo patente ABC123 : ", registro.obtenerMotos());
console.log ("--------------------------------");

//modificar moto por patente "wdj123"
const nuevaMoto = new Moto("Honda", "CB650R", "wdj123");
registro.modificarMoto("wdj123", nuevaMoto);

//ver lista completa de motos en el registro
console.log("Motos en el registro luego de modificar vehiculo patente wdj123: ", registro.obtenerMotos()); 
console.log ("--------------------------------");

//ver listado completo de autos
console.log("Listado de autos antes de modificar: ", registro.obtenerAutos()); 
console.log ("--------------------------------");

//modificar auto por patente "kup441"
const nuevoAuto = new Auto( "Fiat", "Toro","kup441");
registro.modificarAuto("kup441",nuevoAuto); 

//ver listado completo de autos
console.log("Listado de autos luego de modificar vehiculo patente kup441: ", registro.obtenerAutos()); 
console.log ("--------------------------------");

