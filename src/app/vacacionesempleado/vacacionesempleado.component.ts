import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VacacionEmpleado } from '../models/vacacioneEmpleado';
import { vacacionEquipoModel } from '../models/vacacionequipoModel';
import { EmpleadosService } from '../services/empleados.service';
import { VacacionesequipoService } from '../services/vacacionesequipo.service';



@Component({
  selector: 'app-vacacionesempleado',
  templateUrl: './vacacionesempleado.component.html',
  styleUrls: ['./vacacionesempleado.component.css']
})
export class VacacionesempleadoComponent implements OnInit {

  idx:number;
  idEmp:any;
  idvacacion:any;

  empleado:any;
  idempleado:number;
  vacacionesGlobales:any [] = [];
  vacacionesEmpleado:any[] = [];

  vacacionEditar:any[] = [];

  parametros:any;

  constructor( private router: Router,
               private activatedRoute: ActivatedRoute,
               private _vacaciones: VacacionesequipoService,
               private vacacion: vacacionEquipoModel,
               private _empleado: EmpleadosService ) {

              this.idx = this.activatedRoute.snapshot.params['id'];
              this.idempleado = this.activatedRoute.snapshot.params['id'];
              this.idEmp = this.activatedRoute.snapshot.params['idempleado'];
              this.idvacacion = this.activatedRoute.snapshot.params['vac'];

              this.parametros = this.activatedRoute.snapshot;
              console.log(this.parametros);

              this._vacaciones.getVacacionesPorId( this.idx, this.idvacacion).subscribe((vac:any) =>{
                this.vacacionEditar = vac;
                console.log(this.vacacionEditar);
              });

              this._vacaciones.getVacacionesequipo().subscribe( (vacaciones:any) =>{
              this.vacacionesGlobales = vacaciones;
              console.log(this.vacacionesGlobales);
              });

              this.verVacacionesEmpleado();
              this.obtenerEmpleado();
  }

  obtenerEmpleado(){
    this._empleado.getEmpleado( this.idempleado ).subscribe((emp:any) =>{
      this.empleado=emp;
      console.log(this.empleado);
    });
  }

  verVacacionesEmpleado(){
    this._vacaciones.getVacacionesEmpleado( this.idempleado ).subscribe((vacs:any) =>{
      this.vacacionesEmpleado=vacs;
      console.log(this.vacacionesEmpleado);
    });
  }





  // verVacacion( id:number, vac:number){
  //   this._vacaciones.getVacacionesPorId( id, vac ).subscribe((vac:any) =>{
  //     this.vacacionEditar = vac;
  //     console.log(this.vacacionEditar);
  //     this.router.navigate(['/editarvacaciones', this.idx, this.idvacacion]);
  //     return this.vacacionEditar;
  //   });
  // }

  ngOnInit(): void {

    this.parametros = this.activatedRoute.snapshot;
    console.log(this.parametros);

    this.activatedRoute.params.subscribe(
      (parametros) =>{
        this.idEmp = parametros['id'];
        this.idvacacion = parametros['vac'];
      }
    )
  }
}
