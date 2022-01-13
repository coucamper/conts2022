import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class AvisoModel {

  idaviso:number;
  tiposaviso:string;
  asunto:string;
  detalles:string;
  fechaaviso:string;
  idempleado:number;

  constructor(){}

}
