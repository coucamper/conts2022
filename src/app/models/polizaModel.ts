import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



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
  vehiculo:number;

  constructor(){}



}
