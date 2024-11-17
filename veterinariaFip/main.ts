import { Veterinaria } from "./veterinaria";
import { Cliente } from "./cliente";
import { Paciente } from "./paciente";
import { Red } from "./red";
import { Proveedor } from "./proveedor";

//CREO LAS VETERINARIAS
let VetePlus = new Veterinaria  ("Vete plus", "talcahuano 218"); 
let VetePlus2 = new Veterinaria ("Vete plus 2", "Av. Pringles 3502"); 

//CREO LA RED DE VETERINARIAS
let red = new Red (); // CREO UNA RED DE VETERINARIAS

red.altaVeterinaria(VetePlus); //DOY DE ALTA UNA VETERINARIA
red.altaVeterinaria(VetePlus2); //DOY DE ALTA UNA VETERINARIA

//CREO LOS CLIENTES
let cliente1 = new Cliente ("Enzo",2236361319); 
let cliente2 = new Cliente ("Marta", 2284372222); 
let cliente3 = new Cliente ("Mauro", 2236361);

//AGREGO LOS CLIENTES
VetePlus.agregarCliente(cliente1); 
VetePlus.agregarCliente(cliente2); 
VetePlus.agregarCliente(cliente3); 

//CREO LOS PACIENTES (MASCOTAS)
let mascota1 = new Paciente ("Legolas","Lagarto",24); 
let mascota2 = new Paciente ("Gina", "perro",10); 
let mascota3 = new Paciente ("Lucas", "Oveja",12);  
let mascota4 = new Paciente ("Mica", "gato",4); 

console.log ("Muestro las veterinarias: ")
red.mostrarVeterinarias(); //muestro veterinarias
console.log("-----------------------------------------------");

red.bajaVeterinaria("Vete plus 2"); //elimino veterinaria VetePlus 
console.log ("Elimino VetePlus 2 y muestro las que quedan: "); 
red.mostrarVeterinarias(); //muestro veterinarias
console.log("-----------------------------------------------");

console.log ("Modifico veterinaria VetePlus"); 
red.modificarVeterinaria(VetePlus.getId(), "Nueva Veterinaria","Calle falsa 123"); //MODIFICO VETERINARIA 
red.mostrarVeterinarias(); //muestro veterinarias
console.log("-----------------------------------------------");


cliente1.agregarMascota(mascota1);
cliente2.agregarMascota(mascota2); 
cliente3.agregarMascota(mascota3); 
cliente1.agregarMascota(mascota4); 


//MUESTRO LOS CLIENTES DE LA VETERINARIA 
console.log ("Los clientes de la veterinaria son : "); 
VetePlus.getCliente();  
console.log("-----------------------------------------------");

//VER ID ALEATORIOS
console.log ("Muestro los id de cada cliente")
cliente1.mostrarID();
cliente2.mostrarID(); 
cliente3.mostrarID(); 
console.log("-----------------------------------------------");

//PRUEBA DE MOSTRAR CLIENTE Y PACIENTE 
console.log ("Muestro cliente y su paciente: ")
console.log ("Las mascotas de ", cliente1.getNomCliente()," son: ", cliente1.getMascota() ); 
console.log("-----------------------------------------------");

//ELIMINO CLIENTE 
VetePlus.bajaCliente(cliente2.getIdCliente()); 
console.log ("Los clientes despues de eliminar al cliente", cliente2.getNomCliente(), " son: "); 
VetePlus.getCliente(); 
console.log("-----------------------------------------------");


//MODIFICO CLIENTE
console.log ("Modifico cliente 1 Enzo");
VetePlus.modificarCliente(cliente1.getIdCliente(),"Marcos",2284372222); 
VetePlus.getCliente(); 
console.log("-----------------------------------------------");

//BUSCO CLIENTE POR ID
console.log("El cliente con el id: ", cliente3.getIdCliente(), " es: ", VetePlus.buscarClientePorId(cliente3.getIdCliente())); 
console.log("-----------------------------------------------");
VetePlus.getCliente(); 
console.log("-----------------------------------------------");

//ELIMINO UNA MASCOTA 
console.log ("Elimino a mascota Mica");
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
console.log ("Muestra que especies son exoticas: ")
mascota1.esExotica(); 
mascota2.esExotica();
mascota3.esExotica();
mascota4.esExotica(); 
console.log("-----------------------------------------------");

//AGREGO PROVEEDORES

let proveedor1 = new Proveedor ("Hierros gonzalez", 2287454);
let proveedor2 = new Proveedor ("maxiconsumo", 54545454); 
let proveedor3 = new Proveedor ("OLANET", 22);

red.altaProveedor(proveedor1); 
red.altaProveedor(proveedor2); 
red.altaProveedor(proveedor3); 

red.mostrarProveedores(); 

red.bajaProveedores("maxiconsumo");
console.log("-----------------------------------------------");
console.log ("Elimino maxiconsumo y muestro"); 
red.mostrarProveedores(); 





