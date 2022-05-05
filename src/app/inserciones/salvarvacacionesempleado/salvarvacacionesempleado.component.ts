import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoModel } from 'src/app/models/empleado';
import { VacacionModel } from 'src/app/models/vacacion';
import { VacacionEmpleado } from 'src/app/models/vacacioneEmpleado';
import { VacacionEmpleadoActualizarModel } from 'src/app/models/vacacionEmpleadoActualizar';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { VacacionesequipoService } from 'src/app/services/vacacionesequipo.service';



@Component({
  selector: 'app-salvarvacacionesempleado',
  templateUrl: './salvarvacacionesempleado.component.html',
  styleUrls: ['./salvarvacacionesempleado.component.css'],
})
export class SalvarvacacionesempleadoComponent implements OnInit {
  formVacaEmpleado: FormGroup;
  idExiste: boolean = false;
  idx: number;
  empleado: EmpleadoModel;
  listaEmpleados: any[] = [];

  vacacionEmpleado:VacacionEmpleado = new VacacionEmpleado();

  vac:number;

  controlAnyo:any;
  cadenaAnyo:string;

  controlMes:any;
  cadenaMes: string;

  vacacionEditar:VacacionModel = new VacacionModel();
  vacacionActulizar:VacacionEmpleadoActualizarModel = new VacacionEmpleadoActualizarModel();

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

    this._vacaciones.getVacacionesPorId(this.idx, this.vac).subscribe((vac:any) =>{
      this.vacacionEditar = vac;
      this.vacacionActulizar.idempleado = vac.empleado.idempleado;
      console.log("vacacion editar");
      console.log(this.vacacionEditar);
      console.log("/vacacion editar");
    });

    this.crearForm();
    this.cargarVacacion( this.vacacionEditar );
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

  cambiaTitulo(){
    this.idExiste = this.activatedRoute.snapshot.params['id'];

    if(this.idExiste){
      this.idExiste = true;
    } else {
      this.idExiste = false;
    }
  }

  cargarVacacion( vacacion:VacacionModel){
    this.formVacaEmpleado.setValue({
      idplanvacaciones: `${ this.vacacionEditar.idplanvacaciones}`,
      anyo: `${ this.vacacionEditar.anyo }`,
      mes: `${ this.vacacionEditar.mes }`,
      diasdisponibles: `${ this.vacacionEditar.diasdisponibles }`,
      diasvacaciones: `${ this.vacacionEditar.diasvacaciones }`,
      finiciovaca: `${ this.vacacionEditar.finiciovaca }`,
      ffinvaca: `${ this.vacacionEditar.ffinvaca }`,
      diasconsume: `${ this.vacacionEditar.diasconsume }`,
      idempleado :`${ this.vacacionEditar.empleado }`
    });

  }

  // onChangeAnyo( newVal:any){
  //   this.controlAnyo = this.formVacaEmpleado.controls['anyo'].value;
  //   this.controlAnyo = newVal;
  //   this.cadenaAnyo = newVal;
  //   console.log(this.cadenaAnyo);
  //   return this.cadenaAnyo;
  // }

  // onChangeMes( newVal:any){
  //   this.controlMes = this.formVacaEmpleado.controls['mes'].value;
  //   this.controlMes = newVal;
  //   console.log(this.controlMes);

  //   /*
  //   new Date(2009, 10, 10);  // 2009-11-10
  //   */
  //   let fecha = new Date((this.controlMes.substring(0,4), this.controlMes.substring(5,7), (this.controlMes.substring(8,10))));
  //   console.log(fecha);

  //   console.log(this.controlMes.substring(0,4))
  //   console.log(this.controlMes.substring(5,7))
  //   console.log(this.controlMes.substring(8,10))

  //   let mes = fecha.toLocaleString('es-ES', { month: 'long' });
  //   console.log(mes);
  //   let cadenaTemp = newVal;
  //   let i:any = cadenaTemp.indexOf(" ");
  //   console.log(i);
  //   this.cadenaMes = cadenaTemp.substring(0, i);
  //   console.log(this.cadenaMes);
  //   return this.cadenaMes;
  // }



  guardarVacacionEmpleado() {
    this.vacacionActulizar = this.formVacaEmpleado.value;
    this.vacacionActulizar.idplanvacaciones = this.vacacionEditar.idplanvacaciones;
    console.log(this.vacacionActulizar);

    this.vacacionEmpleado = this.formVacaEmpleado.value;
    this.vacacionEmpleado.idempleado = this.idx;
    console.log(this.vacacionEmpleado);
   // this.vacacionEmpleado.anyo =

   if( this.vacacionEmpleado.idplanvacaciones){
     this.vacacionActulizar = this.formVacaEmpleado.value;
     console.log(this.vacacionActulizar);
     return this._vacaciones.putVacacionEmpleado( this.vacacionEditar.idplanvacaciones, this.idx, this.vacacionActulizar).subscribe();
   }else{
     this.vacacionEmpleado = this.formVacaEmpleado.value;
     return this._vacaciones.postVacacionEmpleado( this.idx, this.vacacionEmpleado).subscribe();
   }


  }
}
