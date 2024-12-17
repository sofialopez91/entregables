import * as fs from 'fs';
import { Auto } from "./Auto";
import { Camion} from "./Camion";
import { Moto } from "./Moto";
import {Registro} from "./Registro";

 //nombre del registro
const registro = new Registro ("Registro numero 1");

//crear autos 
let auto1=new Auto("renault","duster",2013,);
let auto2=new Auto("renault","sandero",2017,);
let auto3=new Auto("Fiat","palio",2010,);

//modificar autos 
auto1.setModificarAutos("renault","duster",2024,);

//crear motos
let moto1= new Moto("motomel","blitz",2016);
let moto2= new Moto("motomel","skua",2020);
let moto3= new Moto("honda","twister",2022);
//modificar motos
moto1.setModificarMotos("Honda","shine",2022);

//crear camiones 
let camion1= new Camion("mercedes","asd",202);
let camion2= new Camion("iveco","asd",2024);
let camion3= new Camion("Scania","asd",2024);
//modificar camiones 
camion1.setModificarCamiones("mercedes","f14",2024);

// crear vehiculos 
const auto4=new Auto("ford","ecosport",2019);
const camion4=new Camion("scania","asd",2022);
const moto4=new Moto("motomel","skua",2020);

console.log(auto4);
console.log(camion4);
console.log(moto4);

//agregar a la flota 
registro.agregarAuto(auto4);
registro.agregarCamion(camion4);
registro.agregarMoto(moto4);

//dar de baja vehiulos 
registro.darDeBajaAuto("ford");
registro.darDeBajaCamiones("scania");
registro.darDeBajaMoto("motomel");
