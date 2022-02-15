import { Inject, Injectable, NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';





@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

@Injectable({
  providedIn: "root"
})

export class rutaModel {

  idruta: number;
  denom: string;
  zona: string;
  localidad: string;
  fechaini: string;
  periodo: string;
  ruta: string;
  ruta_idzona: string;


}
