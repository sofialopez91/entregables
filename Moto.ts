

 export class Moto{ 
    private marca:string;
    private modelo: string;
    private anio:number;
    private listaMotos:[];

    constructor(marca:string,modelo:string,anio:number) { 
        this.marca=marca;
        this.modelo=modelo;
        this.anio=anio;
        
    }
    getMotos():string{
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.anio}`;
      } 
      // con el seter modifico parametros mencionados en el constructor para modificar un valor  
    setModificarMotos(nuevaMarca?:string,nuevoModelo?:string,nuevoAnio?:number ):void{
       if (nuevaMarca){
        this.marca=nuevaMarca;
       }
       if (nuevoModelo){
        this.modelo=nuevoModelo;
       }
       if(nuevoAnio){
        this.anio= nuevoAnio;
       }
       
        }

        obtenermoto(): Moto[]{
            return this.listaMotos;
           }
      
           getMarca ():string {
            return this.marca;
      
           }
}      
class SoporteMotos extends Moto{
    protected service:number;
    protected clientes:string[];

   constructor(marca:string,modelo:string,anio:number,service:number,clientes?:string[]){        
    super(marca,modelo,anio)
    this.service=service;
    this.clientes=[];
  }
  getService():number{
  return this.service
  }
  setSumarService():void{
  this.service += 1;
            
  }
  setRestarService(): void {
    if (this.service > 0) {
        this.service -= 1;
    } else {
        console.log("El número de servicios no puede ser menor que 0.");
    }
}
  getClientes():string[]{
  return this.clientes;
 }
 setAgregarClientes(nuevoCliente:string):void{
  if(nuevoCliente){
  this.clientes.push(nuevoCliente);
  }else{
  console.log(`los clientes son ${this.clientes}`);
  }
 }
  setSacarCliente(eliminarCliente:string):void{
  const indice = this.clientes.indexOf(eliminarCliente);
  if (indice !== -1) {
  this.clientes.splice(indice, 1); // Elimina el cliente si se encuentra en el array
  console.log(`Cliente ${eliminarCliente} eliminado.`);;
  } else {
   console.log(`cliente ${this.clientes} no encontrado.`);
  }
 }
   
}


let soporteMotos = new SoporteMotos("Honda", "CBR", 2021, 2019);
soporteMotos.setAgregarClientes("olivia");
soporteMotos.setAgregarClientes("Ana");
console.log(soporteMotos.getClientes());
soporteMotos.setSacarCliente("olivia");
console.log(soporteMotos.getClientes());