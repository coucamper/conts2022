import { HttpClient } from '@angular/common/http';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AvisoModel } from '../models/avisoModel';
import { EmpleadoModel } from '../models/empleado';
import { MensajeModel } from '../models/mensajeModel';
import { AvisosService } from '../services/avisos.service';
import { EmpleadosService } from '../services/empleados.service';
import { MensajesService } from '../services/mensajes.service';
import { TipoimportanciamensajeService } from '../services/tipoimportanciamensaje.service';
import { orderBy } from 'lodash';





@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  mensajes:any[] = [];
  mensajesreceptor:any[] = [];
  avisos:any[] = [];
  avisosMostrados:any;
  //avisosMostrados:any[] = this.avisos.slice(this.avisos.length-4, this.avisos.length);
  usuarios:any[] = [];
  usuario:EmpleadoModel;
  idx:number = 2;
  idreceptor:number;
  idtipoimportancia:number;
  mensaje:MensajeModel;
  idaviso:number;



  constructor( private router:Router,
               private _mensajes: MensajesService,
               private http: HttpClient,
               private _clientes:HttpClient,
               private _empleados: EmpleadosService,
               private _avisos: AvisosService ,
               private _importancia: TipoimportanciamensajeService ) {

                this._mensajes.getMensajes().subscribe( data => {
                  //console.log(data);
                  this.mensajes = data;
                  //console.log(this.mensajes);
                });

              this._empleados.getEmpleados().subscribe( (emp:any) =>{
                this.usuarios = emp;
              });

              this._empleados.getEmpleado( 1 ).subscribe( (emp:any) =>{
                this.usuario = emp;
                this.idreceptor=this.usuario.idempleado;
              });

              this._importancia.getTipoimportancia( this.idtipoimportancia ).subscribe((tipo:any) =>{
                this.idtipoimportancia=tipo;
                //console.log(this.idtipoimportancia);
              });


              this.mostrarAvisos();
              this.mostrarMensajesDeUsuario();
}

  mostrarAvisos(){
    return this._avisos.getAvisos().subscribe( (av:any) => {
      this.avisos = av;
      //console.log( this.avisos );
      this.avisosMostrados = this.avisos.slice(this.avisos.length-4, this.avisos.length );
      console.log(this.avisosMostrados)
    });
  }


  eliminarAviso( idaviso:number ){
    return this._avisos.deleteAviso( Number(idaviso) ).subscribe();
  }

  eliminarMensaje( idmen:number ){
    return this._mensajes.deleteMensajeFormulario( idmen ).subscribe();
  }


  mostrarMensajesDeUsuario(){
    this._mensajes.getMensajesReceptor( 1 ).subscribe((mensajes:any) =>{
      this.mensajesreceptor=mensajes;
      //console.log(this.mensajesreceptor);
    });

  }


  refresh(){
    window.location.reload();
  }


  ngOnInit(): void {
    this.mostrarAvisos();
  }

}
