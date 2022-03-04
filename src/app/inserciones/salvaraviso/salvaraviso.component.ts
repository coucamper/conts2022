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
import { AvisoModel } from 'src/app/models/avisoModel';
import { MensajeModel } from 'src/app/models/mensajeModel';
import { AvisosService } from 'src/app/services/avisos.service';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { TipoimportanciamensajeService } from 'src/app/services/tipoimportanciamensaje.service';

@Component({
  selector: 'app-salvaraviso',
  templateUrl: './salvaraviso.component.html',
  styleUrls: ['./salvaraviso.component.css']
})
export class SalvaravisoComponent implements OnInit {

  formNotificacion: FormGroup;
  aviso:AvisoModel = new AvisoModel();
  isPresent:boolean = false;
  idremitente:number = 2;
  idx:number;
  fechayhora:string = new Date().toISOString();


  constructor(
              private _avisos: AvisosService,
              private router: Router,
              private fB: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private _empleados: EmpleadosService,
              private _importancia: TipoimportanciamensajeService
              ) {

                this.idx = this.activatedRoute.snapshot.params['id'];

                this.crearFormulario();
                console.log(this.fechayhora);
                console.log(this.aviso);

              }

  ngOnInit(): void {
    this.idx = this.activatedRoute.snapshot.params['id'];
    console.log(this.aviso.fechahora+1);
  }


  crearFormulario() {
    this.formNotificacion = new FormGroup({
      asunto: new FormControl(),
      contenido: new FormControl(),
    });
  }





  guardarAviso() {
    this.aviso.asunto=this.formNotificacion.controls['asunto'].value;
    this.aviso.contenido=this.formNotificacion.controls['contenido'].value;
    this.aviso.fechahora= new Date().toISOString();
    console.log(this.aviso.fechahora);
    this.aviso.idremitente=1;
    this._avisos.postAviso(this.aviso.idremitente, this.aviso).subscribe();
    console.log(this.aviso)
  }


  refresh(){
    window.location.reload();
  }


}
