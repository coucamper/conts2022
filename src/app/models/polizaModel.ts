import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VehiculoModel } from './vehiculoModel';



@NgModule({
  imports: [CommonModule, FormsModule]
})
export class PolizaModule {

  idpoliza:number;
  numpoliza:string;
  aseguradora:string;
  fechapoliza:string;
  modalidad:string;
  franquicia:number;
  importepoliza:number;
  periodofact:string;
  vehiculo:VehiculoModel;

  constructor(){}



}
