
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})



export class VacacionGeneralModel{

  idplanvacaciones: number;
  anyo : string;
  mes: string;
  diasdisponibles: number;
  diasconsume: number;
  diasvacaciones: number;
  finiciovaca: string;
  ffinvaca: string;
  idempleado: number;

  constructor() {}

}
