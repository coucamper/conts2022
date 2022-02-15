import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class UserModel {

  public idusuario:number;
  public username:string;
  //public apellido:string;
  // public user_email:string;
  // public user_name: string;
  // public user_pass?:string;

  constructor(){}
}
