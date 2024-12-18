import { Animal } from "./animal";

 export class Perro extends Animal {
    constructor(nombre: string) {
        super(nombre, 100);
    }

    public atacar(): number {
        return 15; // Daño del perro
    }
}
