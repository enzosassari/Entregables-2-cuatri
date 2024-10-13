
import { Auto } from './Auto';
import { Moto } from './Moto';
import { Camion } from './Camion';
import { Registro } from './registro';

//main se usa solo para instanciar 

//creo motos
const moto1 = new Moto (250,"ABJ123","YAMAHA", "XTZ");
const moto2 = new Moto (200,"AWK456","BETA","TR");
const moto3 = new Moto (125,"JKL123","HONDA","XR");


//creo autos
const auto1 = new Auto (5,"KUP441","VOLKSWAGEN","GOL"); 
const auto2 = new Auto (3,"DJI434","FORD","KA"); 
const auto3 = new Auto (2,"KPK434","CHEVROLET","S10"); 

//creo camiones
const camion1 = new Camion (13000,"ABC123","MERCEDES BENZ","1720"); 
const camion2 = new Camion (12000,"MJI474","IVECO","TECTOR");
const camion3 = new Camion (11000,"HGA969","SCANIA","440CV"); 

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

//quitar moto por patente "ABJ123"
registro.quitarMoto("ABJ123"); 
console.log("Motos en el registro luego de eliminar vehiculo patente ABJ123 : ", registro.obtenerMotos());
console.log ("--------------------------------");

//modificar moto por patente "AWK456"
const nuevaMoto = new Moto(600,"AWK456","HONDA","CB600");
registro.modificarMoto("AWK456", nuevaMoto);

//ver lista completa de motos en el registro
console.log("Motos en el registro luego de modificar vehiculo patente AWK456: ", registro.obtenerMotos()); 
console.log ("--------------------------------");

//ver listado completo de autos
console.log("Listado de autos antes de modificar: ", registro.obtenerAutos()); 
console.log ("--------------------------------");

//modificar auto por patente "kup441"
const nuevoAuto = new Auto( 3 ,"kup441","RENAULT","CLIO");
registro.modificarAuto("KUP441",nuevoAuto); 

//ver listado completo de autos
console.log("Listado de autos luego de modificar vehiculo patente kup441: ", registro.obtenerAutos()); 
console.log ("--------------------------------");

