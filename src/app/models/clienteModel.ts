import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})


export class ClienteModel {

  clienteid: number;
  cliente:string;
  email: string;

  constructor(){}

}
