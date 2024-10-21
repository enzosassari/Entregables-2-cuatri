"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mago_1 = require("./mago");
var magoEvolucion_1 = require("./magoEvolucion");
var luchador_1 = require("./luchador");
var luchadorEvolucion_1 = require("./luchadorEvolucion");
var arquero_1 = require("./arquero");
var arqueroEvolucionado_1 = require("./arqueroEvolucionado");
// Creo magos:
var Snake = new mago_1.Mago("Snake"); //mago basico
var Merlin = new magoEvolucion_1.MagoEvolucion("Merlin"); //mago evolucionado 
//Creo luchadores:
var Tyson = new luchador_1.Luchador("Tyson"); //luchador basico
var Maravilla = new luchadorEvolucion_1.LuchadorEvolucion("Maravilla"); //luchador evolucionado
//Creo arqueros: 
var Legolas = new arquero_1.Arquero("Legolas"); //arquero basico    
var Enzo = new arqueroEvolucionado_1.ArqueroEvolucion("Enzo"); //arquero evolucionado 
Snake.atacar();
Merlin.defender();
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
