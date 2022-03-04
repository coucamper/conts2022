import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




@NgModule({
  imports: [CommonModule, FormsModule]
})
export class MantenimientoModule {

  idmantenimiento:number;
  fechamantenimiento:string;
  mantenimiento:string;
  proveedor:string;
  coste:number;
  numfactura:string;
  tipomante:number;
  idvehiculo:number;


  constructor(){}



}
