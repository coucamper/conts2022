import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  NgForm,
} from '@angular/forms';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterEvent,
} from '@angular/router';
import { MensajeModel } from 'src/app/models/mensajeModel';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { TipoimportanciamensajeService } from 'src/app/services/tipoimportanciamensaje.service';

@Component({
  selector: 'app-respondermensaje',
  templateUrl: './respondermensaje.component.html',
  styleUrls: ['./respondermensaje.component.css']
})
export class RespondermensajeComponent implements OnInit {
  formRespuesta: FormGroup;
  mensaje:MensajeModel = new MensajeModel();
  mensa:any;
  idmensaje:number;
  idx:number;
  remitente:any;
  fechayhora:string = new Date().toISOString();
  idreceptor:number;
  idremitente:number;
  idimportancia:number;

  constructor( private _mensajes:MensajesService,
               private router: Router,
               private fB: FormBuilder,
               private activatedRoute: ActivatedRoute) {
                this.idmensaje = this.activatedRoute.snapshot.params['id'];

                this._mensajes.getMensaje( this.idmensaje ).subscribe((mens:any) =>{
                  this.mensa=mens;
                  this.remitente = this.mensa.remitente;
                  //console.log(this.mensa)
                });


                this.crearForm();
                //this.extraerRemitente();
               }

  ngOnInit(): void {
    this.idx = this.activatedRoute.snapshot.params['id'];
    //console.log(this.idmensaje);
  }


  extraerRemitente(){
    this.remitente = this.mensaje.idremitente;

    return this.remitente;
  }

  crearForm(){
    this.formRespuesta = new FormGroup({
      idmensaje: new FormControl(),
      importancia: new FormControl(),
      fechahora: new FormControl(),
      asunto: new FormControl(),
      contenido: new FormControl(),
      idreceptor: new FormControl(),
      idremitente: new FormControl(),
    });
  }




  //     this.mensaje.contenido=this.formMensaje.controls['contenido'].value;

  guardarRespuesta(){
      this.mensaje.fechahora=String(this.fechayhora);
      this.mensaje.asunto="Re: "+this.mensa.asunto;
     //console.log(this.mensaje.asunto)
      this.mensaje.contenido=this.formRespuesta.controls['contenido'].value;
      this.mensaje.idremitente=this.mensa.receptor.idempleado;
      this.mensaje.idreceptor=this.mensa.remitente.idempleado;
      this.mensaje.idtipoimportancia=this.mensa.idtipoimportancia;
      this._mensajes.postMensajeFormulario(this.mensaje.idreceptor, this.mensaje.idremitente, this.mensaje.idtipoimportancia, this.mensaje).subscribe();
      //console.log(this.mensaje)
  }




}
