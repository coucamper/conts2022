
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})



export class VacacionEmpleado{

  idplanvacaciones: number;
  anyo : string;
  mes: string;
  diasdisponibles: number;
  diasconsume: number;
  diasvacaciones: number;
  finiciovaca: string;
  ffinvaca: string;
  idempleado: number;

  constructor() {}

}

/*

  idplanvacaciones: number;
  mes: string;
  anyo: string;
  finiciovaca: string;
  ffinvaca: string;
  diasconsume: number;
  diasdisponibles: number;
  diasvacaciones: number;
  empleado: EmpleadoModel;
  diasconsumecalc: number;
  diasrestantescalc: number;

  constructor() {}

*/


/*
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idplanvacaciones;

	private String mes;

	private String anyo;

	private LocalDate finiciovaca;

	private LocalDate ffinvaca;

	private int diasconsume; // numero de dias a gastar

	private int diasdisponibles; // numero de dias de vacaciones por año, por defecto 21

	private int diasvacaciones;

	@ManyToOne
	@JoinColumn(name="idempleado")
	private EmpleadoVO empleado;

	@Formula("ffinvaca - finiciovaca +1")
	private int diasconsumecalc; // Calculo de numero de dias disponibles - dias gastados



	@Formula("diasdisponibles - diasconsume ")
	private int diasrestantescalc;


*/
