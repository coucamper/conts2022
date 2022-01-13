import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { EmpleadoComponent } from 'src/app/empleados/empleado/empleado.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class PesajeModel {

  idpesaje: number;
  fechapesaje: number;
  pesaje: number;
  vehiculo: string;
  idoperario: number;
  idruta: number;

  constructor(){}
}
