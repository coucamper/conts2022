import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})


export class ClienteModel {

  idcliente: number;
  razonsoc: string;
  contacto: string;
  email: string;
  telefono: string;
  direccion: string;

  constructor(){}

}
