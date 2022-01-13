import { HttpClient } from '@angular/common/http';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AvisoModel } from '../models/avisoModel';
import { EmpleadoModel } from '../models/empleado';
import { AvisosService } from '../services/avisos.service';
import { EmpleadosService } from '../services/empleados.service';
import { ExportacionesService } from '../services/exportaciones.service';
import { MensajesService } from '../services/mensajes.service';





@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  mensajes:any[] = [];
  avisos:any[] = [];
  usuarios:any[] = [];
  usuario:EmpleadoModel;
  idx:number = 3;


  constructor( private router:Router, private _mensajes: MensajesService, private http: HttpClient, private _clientes:HttpClient, private _empleados: EmpleadosService, private _avisos: AvisosService ) {
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

    this.mostrarAvisos();
}

  mostrarAvisos(){
    return this._avisos.getAvisos().subscribe( (av:any) => {
      this.avisos = av;
      console.log( this.avisos );
    });
  }

  ngOnInit(): void {
  }

}
