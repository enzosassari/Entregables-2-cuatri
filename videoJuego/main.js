"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ataque_1 = require("./ataque");
var mago_1 = require("./mago");
var luchador_1 = require("./luchador");
var arquero_1 = require("./arquero");
// Creo mago:
var Snake = new mago_1.Mago("Snake", new ataque_1.Ataque("Bola de fuego", 100));
//Creo luchador:
var Tyson = new luchador_1.Luchador("Tyson", new ataque_1.Ataque("Golpe!", 100));
//Creo arquero: 
var Legolas = new arquero_1.Arquero("Legolas", new ataque_1.Ataque("Flechazo", 100));
// --------------------- pruebas --------------------------------------------//  
Snake.getVida();
Snake.getNivel();
Tyson.setVida(50); //le doy 50 de vida a Tyson
Tyson.getVida();
Legolas.evolucionar();
Tyson.evolucionar();
