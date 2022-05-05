
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EmpleadoModel } from "./empleado";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})



export class VacacionModel{

  anyo: string;
  diasconsume: number;
  diasconsumecalc: number;
  diasdisponibles: number;
  diasrestantescalc: number;
  diasvacaciones: number;
  empleado: EmpleadoModel;
  ffinvaca: string;
  finiciovaca: string;
  idplanvacaciones: number;
  mes: string;

  constructor() {}

}
