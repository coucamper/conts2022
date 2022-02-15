import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class CategoriaModel {

  idcategoria:number;
  denom:string;
  salario:Number;

  constructor(){}

}

/*
	private int idcategoria;
	private String denom;
	private float salario;
*/
