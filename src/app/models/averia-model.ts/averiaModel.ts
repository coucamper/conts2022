import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AveriaModel {

    idaveria: number;
    numfactura: string;
    denom: string;
    idvehiculo: number;
    fechaaveria: string;
    gravedad: string;
    taller: string;
    importe: number;

    constructor(){}

}
