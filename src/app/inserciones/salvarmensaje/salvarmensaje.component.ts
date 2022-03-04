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
  selector: 'app-salvarmensaje',
  templateUrl: './salvarmensaje.component.html',
  styleUrls: ['./salvarmensaje.component.css'],
})
export class SalvarmensajeComponent implements OnInit {

  formMensaje: FormGroup;
  mensaje:MensajeModel = new MensajeModel();
  controlIdMensaje: any[] = [];
  controlIdImportancia: any[] = [];
  controlIdReceptor:any[] = [];
  idmensaje:number;
  idimportancia:number;
  isPresent:boolean = false;
  empleados:any[] = [];
  importancias:any[] = [];
  importancia:any;
  idreceptor:number;
  idremitente:number = 2;
  idx:number;
  fechayhora:string = new Date().toISOString();


  constructor(
              private _mensajes: MensajesService,
              private router: Router,
              private fB: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private _empleados: EmpleadosService,
              private _importancia: TipoimportanciamensajeService
              ) {

                this.idx = this.activatedRoute.snapshot.params['id'];

                this._empleados.getEmpleados().subscribe((empleados:any) => {
                  this.empleados=empleados;
                  console.log(this.empleados);
                });

                this._importancia.getTiposimportancia().subscribe((tipos:any) => {
                  this.importancias=tipos;
                });

                this._empleados.getEmpleado( this.idreceptor ).subscribe((empleado:any) =>{
                  this.idreceptor= empleado;
                  console.log(this.idreceptor);
                });

                this.crearFormulario();
                console.log(this.fechayhora);


                console.log(this.mensaje);

              }

  ngOnInit(): void {
    this.idx = this.activatedRoute.snapshot.params['id'];
  }


  crearFormulario() {
    this.formMensaje = new FormGroup({
      idmensaje: new FormControl(),
      importancia: new FormControl(),
      fechahora: new FormControl(),
      asunto: new FormControl(),
      contenido: new FormControl(),
      idreceptor: new FormControl(),
      idremitente: new FormControl(),
    });
  }




  onChangeReceptor(newValue: any) {
    this.controlIdReceptor = this.formMensaje.controls['idreceptor'].value;
    this.controlIdReceptor = newValue;
    this.idreceptor= Number(newValue&&newValue.substring(0,2));
    console.log("id del receptor :"+this.idreceptor);

  }


  onChangeImportancia(newValue: any){
    this.controlIdImportancia = this.formMensaje.controls['importancia'].value;
    this.controlIdImportancia = newValue;
    this.idimportancia = Number(newValue&&newValue.substring(0,2));
    console.log("id de importancia :"+this.idimportancia);
  }



  guardarMensaje() {
    this.mensaje.fechahora=String(this.fechayhora);
    this.mensaje.asunto=this.formMensaje.controls['asunto'].value;
    this.mensaje.contenido=this.formMensaje.controls['contenido'].value;
    this.mensaje.idremitente=2;
    this.mensaje.idreceptor=this.idreceptor;
    this.mensaje.idtipoimportancia=this.idimportancia;
    this._mensajes.postMensajeFormulario(this.idreceptor, this.idremitente, this.idimportancia, this.mensaje).subscribe();
    console.log(this.mensaje)
  }


  refresh(){
    window.location.reload();
  }


}
