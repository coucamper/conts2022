import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { vacacionEquipoModel } from '../models/vacacionequipoModel';
import { EmpleadosService } from '../services/empleados.service';
import { VacacionesequipoService } from '../services/vacacionesequipo.service';


@Component({
  selector: 'app-vacacionesempleado',
  templateUrl: './vacacionesempleado.component.html',
  styleUrls: ['./vacacionesempleado.component.css']
})
export class VacacionesempleadoComponent implements OnInit {

  empleado:any;
  idempleado:number;
  vacacionesGlobales:any [] = [];
  vacacionesEmpleado:any[] = [];

  constructor( private router: Router,
               private activatedRoute: ActivatedRoute,
               private _vacaciones: VacacionesequipoService,
               private vacacion: vacacionEquipoModel,
               private _empleado: EmpleadosService ) {

              this.idempleado = this.activatedRoute.snapshot.params['id'];

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

  ngOnInit(): void {
  }
}
