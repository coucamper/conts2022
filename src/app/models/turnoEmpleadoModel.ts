import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class TurnoEmpleadoModel {

  idturnoempleado:number;
  idempleado:number;
  idturno:number;
  fechainicioturno:string;
  fechafinturno:string;

  constructor(){}

}
