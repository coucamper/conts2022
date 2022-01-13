
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UserModel } from "./userModel";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})


export class SessionModel {

  public token: string;
  public user: UserModel;

}
