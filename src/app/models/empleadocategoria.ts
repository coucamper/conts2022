import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class EmpleadocategoriaModel {

  idempleadocategoria:number;
  empleado:string;
  categoria:string;

  constructor(){}

}

/*
	private int idempleadocategoria;

	@ManyToOne
	@JoinColumn(name="idempleado")
	private EmpleadoVO empleado;

	@ManyToOne
	@JoinColumn(name="idcategoria")
	private CategoriaVO categoria;
*/
