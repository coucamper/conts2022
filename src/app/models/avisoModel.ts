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
  asunto:string;
  contenido:string;
  fechahora:string;
  idremitente:number;

  constructor(){}

}
