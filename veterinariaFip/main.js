"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var veterinaria_1 = require("./veterinaria");
var cliente_1 = require("./cliente");
var paciente_1 = require("./paciente");
var mascota1 = new paciente_1.Paciente("Legolas", "Lagarto");
var mascota2 = new paciente_1.Paciente("Gina", "Perro");
var mascota3 = new paciente_1.Paciente("Lucas", "Oveja");
var mascota4 = new paciente_1.Paciente("Mica", "Gato");
var cliente1 = new cliente_1.Cliente("Enzo", 2236361319);
var cliente2 = new cliente_1.Cliente("Marta", 2284372222);
var cliente3 = new cliente_1.Cliente("Mauro", 2236361);
var VetePlus = new veterinaria_1.Veterinaria(1, "Vete plus", "talcahuano 218");
VetePlus.agregarCliente(cliente1);
VetePlus.agregarCliente(cliente2);
VetePlus.agregarCliente(cliente3);
cliente1.agregarMascota(mascota1);
cliente2.agregarMascota(mascota2);
cliente3.agregarMascota(mascota3);
cliente1.agregarMascota(mascota4);
//MUESTRO LOS CLIENTES DE LA VETERINARIA 
VetePlus.getCliente();
console.log("-----------------------------------------------");
//VER ID ALEATORIOS
cliente1.mostrarID();
cliente2.mostrarID();
cliente3.mostrarID();
console.log("-----------------------------------------------");
console.log("Las mascotas de ", cliente1.getNomCliente(), " son: ", cliente1.getMascota());
console.log("-----------------------------------------------");
console.log("Las mascotas de ", cliente2.getNomCliente(), " son: ", cliente2.getMascota());
console.log("-----------------------------------------------");
//ELIMINO CLIENTE 
VetePlus.bajaCliente(cliente2.getIdCliente());
console.log("Los clientes despues de eliminar al cliente", cliente2.getNomCliente(), " son: ");
VetePlus.getCliente();
console.log("-----------------------------------------------");
//MODIFICO A UN CLIENTE
//const nuevoCliente = new Cliente (1, "Carlitos", 228455446,8);
//VetePlus.modificarCliente(1,nuevoCliente); 
//console.log ("Los clientes despues de modificar al cliente Enzo por Carlitos son: "); 
//VetePlus.getCliente();
//console.log("-----------------------------------------------");
//BUSCO CLIENTE POR ID
console.log("El cliente con el id: ", cliente3.getIdCliente(), " es: ", VetePlus.buscarClientePorId(cliente3.getIdCliente()));
console.log("-----------------------------------------------");
VetePlus.getCliente();
console.log("-----------------------------------------------");
//ELIMINO UNA MASCOTA 
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
