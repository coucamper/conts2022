import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class UsuarioModel {
  userid:number;
  username: string;
  password: string;
  nombre: string;
  email: string;
  apellido: string;
  enabled: boolean;
  roles?:any;

  constructor(){}

}
