import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { CalendarHeaderComponent } from '../demo-utils/calendar-header.component';



@NgModule({
  imports: [CommonModule, FormsModule, CalendarModule],
  declarations: [CalendarHeaderComponent],
  exports: [CalendarHeaderComponent],
})
export class MultaModule {

  idmulta:number;
  fechamulta:string;
  causamulta:string;
  lugarmulta:string;
  importe:number;
  idvehiculo:number;
  idempleado:number;




}
