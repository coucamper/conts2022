import { HttpClient } from '@angular/common/http';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Data, Router, RouterLink } from '@angular/router';
import { AvisoModel } from '../models/avisoModel';
import { EmpleadoModel } from '../models/empleado';
import { MensajeModel } from '../models/mensajeModel';
import { AvisosService } from '../services/avisos.service';
import { EmpleadosService } from '../services/empleados.service';
import { MensajesService } from '../services/mensajes.service';
import { TipoimportanciamensajeService } from '../services/tipoimportanciamensaje.service';
import { orderBy } from 'lodash';
import { LegendType, NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { PesajesService } from '../services/pesajes.service';
import { DonutData } from '../models/donutData';
import { LegendPosition } from '@swimlane/ngx-charts';
import { misDatos } from './data';
import { VacacionesequipoService } from '../services/vacacionesequipo.service';
import { BlockData } from '../models/blockData';
import { SeriesData } from '../models/seriesData';
import { GoogleChartComponent, GoogleChartsModule } from 'angular-google-charts';
import { ChartType, Row } from "angular-google-charts";
import { TurnoempleadoService } from '../services/turnoempleado.service';
import { TurnosconductoresComponent } from '../turnosconductores/turnosconductores.component';
import { AuthService } from '../services/auth-service.service';






@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],

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
  data:Data;
  datos:any[];
  donutData:DonutData; // Este es el objeto que almacena la data del Donut. Requiere de la creación de una clase para almacenar y aceptar los valores correctos.
  datosRespuesta:Object[] = [];
  datosRespuestaVacaciones:Object[] = [];
  vacaciones:any[] = [];
  turnos:any[] = [];

  BlockData:BlockData;
  blockData:BlockData;
  seriesData:SeriesData;
  conversor:any[] = [];

  usuarioLogueado:any;



  constructor( private router:Router,
               private _mensajes: MensajesService,
               private http: HttpClient,
               private _clientes:HttpClient,
               private _empleados: EmpleadosService,
               private _avisos: AvisosService ,
               private _importancia: TipoimportanciamensajeService,
               private _pesajes: PesajesService,
               private _vacaciones: VacacionesequipoService,
               private _turnos: TurnoempleadoService,
               private _authService: AuthService ) {

                this._mensajes.getMensajes().subscribe( data => {
                  this.mensajes = data;
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
              });

              this.usuarioLogueado = this._authService.usuario.username;

              // CALLING METHODS
              this.mostrarAvisos();
              this.mostrarMensajesDeUsuario();
}

  mostrarAvisos(){
    return this._avisos.getAvisos().subscribe( (av:any) => {
      this.avisos = av;
      //console.log( this.avisos );
      this.avisosMostrados = this.avisos.slice(0, 4 );
      //console.log(this.avisosMostrados)
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
    });

  }

  refresh(){
    window.location.reload();
  }

  ngOnInit(): void {

    this.mostrarAvisos();
  }



}
