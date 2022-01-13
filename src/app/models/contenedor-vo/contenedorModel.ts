import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class ContenedorVOModule {
  idcontenedor: number;
  localidad: string;
  barrio: string;
  denom: string;
  ubicacion: string;
  coordenadas: string;
  mapa: string;
  fechaimplantacion: string;
 }
