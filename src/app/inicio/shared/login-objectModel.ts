
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UserModel } from "src/app/models/userModel";
import { Inject } from '@angular/core';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})


export class LoginObjectModel {

  public user_name: string;
  public user_pass: string;

  constructor( @Inject(String) private object:any ) {
    this.user_name = (object.user_name) ? object.user_name : null;
    this.user_pass = (object.user_pass) ? object.user_pass : null;
  }
}
