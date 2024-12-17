export * as fs from 'fs';

export class Camion{
    private marca:string;
    private modelo: string;
    private anio:number;
   
    private listaCamiones:Camion[];

    constructor(marca:string,modelo:string,anio:number,){
        this.marca=marca;
        this.modelo=modelo;
        this.anio=anio;
        this.listaCamiones=[];

    }
    getCamion():string{
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Anio: ${this.anio}`;
      }  
      setModificarCamiones(nuevaMarca?:string,nuevoModelo?:string,nuevoAnio?:number ):void{
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
obtenerCamiones(): Camion[]{
    return this.listaCamiones;
   }
   agregarCamion(camion: Camion): void {
    this.listaCamiones.push(camion);
}

   getMarca ():string {
    return this.marca;

   }
}
   class SoporteCamion extends Camion{
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
  this.clientes.splice(indice, 1); 
  console.log(`Cliente ${eliminarCliente} eliminado.`);;
  } else {
   console.log(`cliente ${this.clientes} no encontrado.`);
  }
 }
   
}
let SoporteCamiones = new SoporteCamion("mercedez", "benz", 2000, 2005, );
SoporteCamiones.setAgregarClientes("sofia");
SoporteCamiones.setAgregarClientes("olivia");
console.log(SoporteCamiones.getClientes());
SoporteCamiones.setSacarCliente("sofia");
console.log(SoporteCamiones.getClientes());