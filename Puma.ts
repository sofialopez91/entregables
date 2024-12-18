import { Animal} from "./animal";

export class Puma extends Animal {
    static estaVivo() {
        
    }
    constructor(nombre: string) {
        super(nombre, 120);
    }

    public atacar(): number {
        return 30; 
    }
}