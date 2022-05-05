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
  public password:string;
  public roles:string[] = [];
  constructor(){}
}
