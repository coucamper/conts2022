import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { CalendarHeaderComponent } from '../demo-utils/calendar-header.component';
import { ContenedorVOModule } from './contenedor-vo/contenedorModel';
import { rutaModel } from './rutaModel';
import { EmpleadoModel } from './empleado';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class NivelContenedorRuta {

  idnivelcontenedor:number;
  fecharegistro: string;
  idcontenedor:string;
  idempleado:number;
  idllenado: number;
  idpesaje: number;

  constructor(){}

}
