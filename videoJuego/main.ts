import { Ataque } from "./ataque";
import { Mago } from "./mago";
import { Luchador } from "./luchador";
import { Arquero } from "./arquero";


// Creo mago:
let Snake = new Mago ("Snake",new Ataque("Bola de fuego", 100));


//Creo luchador:
let Tyson = new Luchador ("Tyson", new Ataque("Golpe!", 100)); 


//Creo arquero: 
let Legolas = new Arquero ("Legolas", new Ataque("Flechazo",100));    


// --------------------- pruebas --------------------------------------------//  

Snake.getVida();
Snake.getNivel(); 
Tyson.setVida(50); //le doy 50 de vida a Tyson
Tyson.getVida(); 
Legolas.evolucionar();
Tyson.evolucionar(); 



