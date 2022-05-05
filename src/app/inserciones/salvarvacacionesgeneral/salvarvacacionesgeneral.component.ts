import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoModel } from 'src/app/models/empleado';
import { VacacionModel } from 'src/app/models/vacacion';
import { VacacionEmpleado } from 'src/app/models/vacacioneEmpleado';
import { VacacionEmpleadoActualizarModel } from 'src/app/models/vacacionEmpleadoActualizar';
import { vacacionEquipoModel } from 'src/app/models/vacacionequipoModel';
import { VacacionGeneralModel } from 'src/app/models/vacaciongeneralModel';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { VacacionesequipoService } from 'src/app/services/vacacionesequipo.service';


@Component({
  selector: 'app-salvarvacacionesgeneral',
  templateUrl: './salvarvacacionesgeneral.component.html',
  styleUrls: ['./salvarvacacionesgeneral.component.css']
})
export class SalvarvacacionesgeneralComponent implements OnInit {
  formVacaEmpleado: FormGroup;
  idExiste: boolean = false;
  idx: number;
  empleado: EmpleadoModel;
  listaEmpleados: any[] = [];
  idempleado:number;

  vacacionEmpleado:VacacionGeneralModel = new VacacionGeneralModel();
  vac:number;

  // Controles formulario
  controlAnyo:any;
  cadenaAnyo:string;
  controlMes:any;
  cadenaMes: string;
  controlEmpleado:any;


  constructor(
    private Route: Router,
    private activatedRoute: ActivatedRoute,
    private _vacaciones: VacacionesequipoService,
    private _empleado: EmpleadosService,
    private _vacacion: VacacionEmpleado
  ) {
    this.idx = this.activatedRoute.snapshot.params['id'];
    this.vac = this.activatedRoute.snapshot.params['vac'];
    this._empleado.getEmpleado(this.idx).subscribe((e: any) => {
      this.empleado = e;
      console.log(this.empleado);
    });

    this._empleado.getEmpleados().subscribe((empleados: any) => {
      this.listaEmpleados = empleados;
      console.log(this.listaEmpleados);
    });


    this.crearForm();
  }

  ngOnInit(): void {
    this.idExiste = this.activatedRoute.snapshot.params['id'];
    if (this.idExiste) {
      this.idExiste = true;
    } else {
      this.idExiste = false;
    }
  }

  crearForm() {
    this.formVacaEmpleado = new FormGroup({
      idplanvacaciones: new FormControl(),
      anyo: new FormControl(),
      mes: new FormControl(),
      diasdisponibles: new FormControl(),
      diasvacaciones: new FormControl(),
      finiciovaca: new FormControl(),
      ffinvaca: new FormControl(),
      diasconsume: new FormControl(),
      idempleado: new FormControl()
    });
  }


  onChangeEmpleado(newValue:any){
    this.controlEmpleado = this.formVacaEmpleado.controls['empleado'].value;
    this.controlEmpleado = newValue;
    this.idempleado = newValue;
    console.log(this.idempleado);
  }



  cambiaTitulo(){
    this.idExiste = this.activatedRoute.snapshot.params['id'];

    if(this.idExiste){
      this.idExiste = true;
    } else {
      this.idExiste = false;
    }
  }


  guardarVacacion() {
    this.vacacionEmpleado = this.formVacaEmpleado.value;
    console.log(this.vacacionEmpleado);
     return this._vacaciones.postVacacion( this.idempleado, this.vacacionEmpleado).subscribe();

  }

}
