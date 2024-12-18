import { styleText } from "node:util";

import { Perro } from "./Perro";
import { Gato } from "./Gato";
import { Puma } from "./puma"; 

const perro = new Perro("Pichi");
const gato = new Gato("Pety");
const puma = new Puma("Puma");

// Simulación de batalla entre perro y gato
while (perro.estaVivo() && gato.estaVivo()) {
    const danoPerro = perro.atacar();
    gato.recibirDano(danoPerro);

    if (!gato.estaVivo()) {
        console.log(`\x1b[31m${gato.nombre} ha sido derrotado! ${perro.nombre} avanza y pelea con ${puma.nombre}\x1b[0m`);
        
        break; // Salir del bucle si el gato es derrotado
    }

    const danoGato = gato.atacar();
    perro.recibirDano(danoGato);

    if (!perro.estaVivo()) {
        console.log(`${perro.nombre} ha sido derrotado!`);
        break; // Salir del bucle si el perro es derrotado
    }
}

// Si el perro sigue vivo, pelea con el puma
if (perro.estaVivo()) {
    while (perro.estaVivo() && puma.estaVivo()) {
        const danoPerro = perro.atacar();
        puma.recibirDano(danoPerro);

        if (!puma.estaVivo()) {
            console.log(`\x1b[33m${puma.nombre} ha sido derrotado! ${perro.nombre} es el ganador\x1b[0m`);
            break; // Salir del bucle si el puma es derrotado
        }

        const danoPuma = puma.atacar();
        perro.recibirDano(danoPuma);

        if (!perro.estaVivo()) {
            console.log(`${perro.nombre} ha sido derrotado!`);
            break; // Salir del bucle si el perro es derrotado
        }
    }
}