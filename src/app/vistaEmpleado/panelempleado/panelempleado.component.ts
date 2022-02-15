import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { EmpleadoModel } from 'src/app/models/empleado';
import { rutaModel } from 'src/app/models/rutaModel';
import { UserModel } from 'src/app/models/userModel';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { MensajesService } from 'src/app/services/mensajes.service';



@Component({
  selector: 'app-panelempleado',
  templateUrl: './panelempleado.component.html',
  styleUrls: ['./panelempleado.component.css']
})
export class PanelempleadoComponent implements OnInit {

  mensajes:any[] = [];

  usuarios:any[] = [];
  usuario:UserModel;
  idx:number = 1;

  @Input() ruta:rutaModel;


  constructor( private router:Router, private _mensajes: MensajesService, private http: HttpClient, private _clientes:HttpClient, private _empleados: EmpleadosService ) {
    this._mensajes.getMensajes().subscribe( data => {
      console.log(data);
      this.mensajes = data;
  });

    this._empleados.getEmpleados().subscribe( (emp:any) =>{
      this.usuarios = emp;
    });

    this._empleados.getEmpleado( this.idx ).subscribe( (emp:any) =>{
      this.usuario = emp;
    });
}

  ngOnInit(): void {
  }
}
