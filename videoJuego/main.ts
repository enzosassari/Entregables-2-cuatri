
import { Mago } from "./mago";
import { MagoEvolucion } from "./magoEvolucion";
import { Luchador } from "./luchador";
import { LuchadorEvolucion } from "./luchadorEvolucion";
import { Arquero } from "./arquero";
import { ArqueroEvolucion } from "./arqueroEvolucionado";

// Creo magos:
let Snake = new Mago ("Snake");  //mago basico
let Merlin = new MagoEvolucion ("Merlin");  //mago evolucionado 

//Creo luchadores:
let Tyson = new Luchador ("Tyson");  //luchador basico
let Maravilla = new LuchadorEvolucion ("Maravilla"); //luchador evolucionado

//Creo arqueros: 
let Legolas = new Arquero ("Legolas");  //arquero basico    
let Enzo = new ArqueroEvolucion ("Enzo"); //arquero evolucionado 

// --------------------- pruebas --------------------------------------------//  
Snake.atacar();  //pruebo ataque y veo como ataca y por cuanto ...
Enzo.defender();
Merlin.atacar();
Maravilla.defender();
Snake.getVida();
Merlin.getVida();
Snake.getNivel();
Merlin.getNivel();   
Merlin.lanzarHechizoBasico(); 
Snake.lanzarHechizoBasico(); 
Merlin.lanzarHechizoEvolucionado();
Tyson.lanzarGolpeBasico(); 
Maravilla.lanzarGolpeBasico();
Legolas.defender(); 
Legolas.lanzarFlechaBasica(); 
Enzo.getVida();
Enzo.setVida(50); //le doy 50 de vida 
Enzo.getVida();



