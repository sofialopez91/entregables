
   export class Animal {
        public nombre: string;
        protected vida: number;
    
        constructor(nombre: string, vida: number) {
            this.nombre = nombre;
            this.vida = vida;
        }
    
        public atacar(): number {
            throw new Error("Este método debe ser implementado por las subclases");
        }
    
        public recibirDano(dano: number): void {
            this.vida -= dano;
            console.log(`${this.nombre} ha recibido ${dano} de daño. Vida restante: ${this.vida}`);
        }
    
        public estaVivo(): boolean {
            return this.vida > 0;
        }
    }