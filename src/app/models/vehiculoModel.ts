import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';





@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class VehiculoModel {

	 idvehiculo: number;
	 matricula: string;
	 marca: string;
	 modelo: string;
	 fechacompra: string;
   aseguradora: string;
   poliza: string;

    constructor(){}

 }
