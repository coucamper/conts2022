import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { EmpleadoComponent } from 'src/app/empleados/empleado/empleado.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EmpleadoModel {

  idempleado: number;
  nomemp: string;
  ape1emp:string;
  ape2emp:string;
  nif: string;
  nss: string;
  antiguedad: string;
  telecontacto: string;
  emailemp: string;
  fechanac: string;
  iban: string;
  estudios: string;
  numhijos: string;
  domicilio: string;
  categoria: string;
  tipocontrato: string;


    constructor(){}

 }
