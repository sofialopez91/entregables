import { Animal } from "./animal";

export class Gato extends Animal {
    constructor(nombre: string) {
        super(nombre, 80);
    }

    public atacar(): number {
        return 10; // Daño del gato
    }
}