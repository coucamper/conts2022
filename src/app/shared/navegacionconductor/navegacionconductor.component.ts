import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoModel } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { MensajesService } from 'src/app/services/mensajes.service';




@Component({
  selector: 'app-navegacionconductor',
  templateUrl: './navegacionconductor.component.html',
  styleUrls: ['./navegacionconductor.component.css']
})
export class NavegacionconductorComponent implements OnInit {


  @Input() items:any[] = [];

  fecha = new Date();
  mes = new Date().toLocaleString( 'default', { month: 'long' } );
  anio = new Date().getFullYear().toLocaleString();

  usuario:EmpleadoModel;

  idx:number = 1;

  constructor( private router:Router, private _mensajes: MensajesService, private http: HttpClient, private _clientes:HttpClient, private _empleados: EmpleadosService ) {
    this._empleados.getEmpleado( this.idx ).subscribe( (e:any) =>{
      console.log( e );
      this.usuario = e;
    });
   }

  ngOnInit(): void {
  }

}
