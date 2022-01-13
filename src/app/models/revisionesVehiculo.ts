import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class RevisionesVehiculo {

  idrevivehiculo: number;
  fecharevision: string;
  tiporevision: string;
  idvehiculo: number;

  constructor(){}

}
