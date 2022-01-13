import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EmpleadoModel } from "./empleado";




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class vacacionEquipoModel{

  idplanvacaciones:number;
  diasvacaciones:number;
  finiciovaca:string;
  ffinvaca:string;
  diasconsume:number;
  diasconsumidos:number;
  diasrestantes:number;
  empleado:EmpleadoModel;
  anyoanterior:string;
  pendientesanyoanterior:number;

  constructor(){}

}
