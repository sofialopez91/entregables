import * as fs from 'fs';
import { Auto } from "./Auto";
import { Camion} from "./Camion";
import { Moto } from "./Moto";



export class Registro{
    private nombre:string;
    private auto:Auto[];
    private camion:Camion[];
    private moto:Moto[];
   


    constructor(nombre:string,listaAutos?:Auto[],listaCamiones?:Camion[],listaMotos?:Moto[]){
       this.nombre=nombre;
       if(listaAutos != undefined){
        this.auto= listaAutos;
       }else{
        this.auto=[];
        }
        if(listaCamiones != undefined){
            this.camion = listaCamiones;
        }else{
            this.camion=[];
        }
        if(listaMotos != undefined){
            this.moto =listaMotos;
        }else{
            this.moto=[];
        }

       }
       agregarAuto(autos:Auto ): void{
        this.auto.push(autos);
       }
       agregarCamion(camiones:Camion ): void{
        this.camion.push(camiones);
       }
       agregarMoto(moto:Moto ): void{
        this.moto.push(moto);
       }
        getRegistro():string{
        return this.nombre;
    }
    darDeBajaAuto(marca:string):void{
        this.auto = this.auto.filter(auto=> auto.getMarca() !== marca);
    } 
    darDeBajaCamiones(marca:string):void{
        this.camion = this.camion.filter(camion=> camion.getMarca() !== marca);
    }
    darDeBajaMoto(marca:string):void{
        this.moto = this.moto.filter(moto=> moto.getMarca() !== marca);
    }
}
