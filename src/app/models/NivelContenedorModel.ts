import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContenedorVOModule } from "./contenedor-vo/contenedorModel";
import { EmpleadoModel } from "./empleado";
import { PesajeModel } from "./pesajeModel";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class NivelContenedorModel {

  idnivelcontenedor: number;
  fecharegistro: string;
  nivelregistro: string;
  contenedor:ContenedorVOModule;
  pesaje:PesajeModel;
  empleado:EmpleadoModel;

}

