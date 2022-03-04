import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class MensajeModel {

  idmensaje:number;
  fechahora:string;
  asunto:string;
  contenido:string;
  idreceptor:number;
  idremitente:number;
  idtipoimportancia:number;

  constructor(){}


}
