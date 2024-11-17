"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var veterinaria_1 = require("./veterinaria");
var cliente_1 = require("./cliente");
var paciente_1 = require("./paciente");
var red_1 = require("./red");
var proveedor_1 = require("./proveedor");
//CREO LAS VETERINARIAS
var VetePlus = new veterinaria_1.Veterinaria("Vete plus", "talcahuano 218");
var VetePlus2 = new veterinaria_1.Veterinaria("Vete plus 2", "Av. Pringles 3502");
//CREO LA RED DE VETERINARIAS
var red = new red_1.Red(); // CREO UNA RED DE VETERINARIAS
red.altaVeterinaria(VetePlus); //DOY DE ALTA UNA VETERINARIA
red.altaVeterinaria(VetePlus2); //DOY DE ALTA UNA VETERINARIA
//CREO LOS CLIENTES
var cliente1 = new cliente_1.Cliente("Enzo", 2236361319);
var cliente2 = new cliente_1.Cliente("Marta", 2284372222);
var cliente3 = new cliente_1.Cliente("Mauro", 2236361);
//AGREGO LOS CLIENTES
VetePlus.agregarCliente(cliente1);
VetePlus.agregarCliente(cliente2);
VetePlus.agregarCliente(cliente3);
//CREO LOS PACIENTES (MASCOTAS)
var mascota1 = new paciente_1.Paciente("Legolas", "Lagarto", 24);
var mascota2 = new paciente_1.Paciente("Gina", "perro", 10);
var mascota3 = new paciente_1.Paciente("Lucas", "Oveja", 12);
var mascota4 = new paciente_1.Paciente("Mica", "gato", 4);
console.log("Muestro las veterinarias: ");
red.mostrarVeterinarias(); //muestro veterinarias
console.log("-----------------------------------------------");
red.bajaVeterinaria("Vete plus 2"); //elimino veterinaria VetePlus 
console.log("Elimino VetePlus 2 y muestro las que quedan: ");
red.mostrarVeterinarias(); //muestro veterinarias
console.log("-----------------------------------------------");
console.log("Modifico veterinaria VetePlus");
red.modificarVeterinaria(VetePlus.getId(), "Nueva Veterinaria", "Calle falsa 123"); //MODIFICO VETERINARIA 
red.mostrarVeterinarias(); //muestro veterinarias
console.log("-----------------------------------------------");
cliente1.agregarMascota(mascota1);
cliente2.agregarMascota(mascota2);
cliente3.agregarMascota(mascota3);
cliente1.agregarMascota(mascota4);
//MUESTRO LOS CLIENTES DE LA VETERINARIA 
console.log("Los clientes de la veterinaria son : ");
VetePlus.getCliente();
console.log("-----------------------------------------------");
//VER ID ALEATORIOS
console.log("Muestro los id de cada cliente");
cliente1.mostrarID();
cliente2.mostrarID();
cliente3.mostrarID();
console.log("-----------------------------------------------");
//PRUEBA DE MOSTRAR CLIENTE Y PACIENTE 
console.log("Muestro cliente y su paciente: ");
console.log("Las mascotas de ", cliente1.getNomCliente(), " son: ", cliente1.getMascota());
console.log("-----------------------------------------------");
//ELIMINO CLIENTE 
VetePlus.bajaCliente(cliente2.getIdCliente());
console.log("Los clientes despues de eliminar al cliente", cliente2.getNomCliente(), " son: ");
VetePlus.getCliente();
console.log("-----------------------------------------------");
//MODIFICO CLIENTE
console.log("Modifico cliente 1 Enzo");
VetePlus.modificarCliente(cliente1.getIdCliente(), "Marcos", 2284372222);
VetePlus.getCliente();
console.log("-----------------------------------------------");
//BUSCO CLIENTE POR ID
console.log("El cliente con el id: ", cliente3.getIdCliente(), " es: ", VetePlus.buscarClientePorId(cliente3.getIdCliente()));
console.log("-----------------------------------------------");
VetePlus.getCliente();
console.log("-----------------------------------------------");
//ELIMINO UNA MASCOTA 
console.log("Elimino a mascota Mica");
cliente1.bajaMascota("Mica");
VetePlus.getCliente();
console.log("-----------------------------------------------");
//CONSULTAS EN LA VETERINARIA
cliente1.consultaVeterinaria();
cliente1.consultaVeterinaria();
cliente1.consultaVeterinaria();
cliente1.consultaVeterinaria();
cliente1.consultaVeterinaria();
cliente1.consultaVeterinaria();
cliente3.consultaVeterinaria();
console.log("-----------------------------------------------");
//CONSULTAR ID DE VETERINARIA
console.log(VetePlus.getId());
console.log("-----------------------------------------------");
//SON EXOTICAS ? 
console.log("Muestra que especies son exoticas: ");
mascota1.esExotica();
mascota2.esExotica();
mascota3.esExotica();
mascota4.esExotica();
console.log("-----------------------------------------------");
//AGREGO PROVEEDORES
var proveedor1 = new proveedor_1.Proveedor("Hierros gonzalez", 2287454);
var proveedor2 = new proveedor_1.Proveedor("maxiconsumo", 54545454);
var proveedor3 = new proveedor_1.Proveedor("OLANET", 22);
red.altaProveedor(proveedor1);
red.altaProveedor(proveedor2);
red.altaProveedor(proveedor3);
red.mostrarProveedores();
red.bajaProveedores("maxiconsumo");
console.log("-----------------------------------------------");
console.log("Elimino maxiconsumo y muestro");
red.mostrarProveedores();
