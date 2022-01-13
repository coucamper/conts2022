import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Output, TemplateRef } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DatepickerServiceInputs } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service';
import { DatasetComponentOption } from 'echarts';
import { DateLimit } from 'flatpickr/dist/types/options';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { timestamp } from 'rxjs/operators';
import { EmpleadoModel } from 'src/app/models/empleado';
import { rutaModel } from 'src/app/models/rutaModel';
import { ContenedoresService } from 'src/app/services/contenedores.service';
import { ContenedoresRutasService } from 'src/app/services/contenedoresrutas.service';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { LlenadosService } from 'src/app/services/llenados.service';
import { RutasService } from 'src/app/services/rutas.service';
import { TiposincidenciaService } from 'src/app/services/tiposincidencia.service';




@Component({
  selector: 'app-rutasjornada',
  templateUrl: './rutasjornada.component.html',
  styleUrls: ['./rutasjornada.component.css']
})
export class RutasjornadaComponent implements OnInit {

  inicializado:boolean = false;
  finalizado:boolean = false;

  conductor:EmpleadoModel;
  rutas:any[] = [];
  @Output() ruta:rutaModel;

  @Output() contenedores:any[] = [];

  modal:any;

  idx:number = 1;
  idruta:number = 2;

  modalRef: BsModalRef;

  llenados:any[] = [];

  tiposIncidencia:any[] = [];

  timestamp:Date;

  temporizador:Date;

  temporizadorRuta:any;
  temporizadorFinRuta:any;

  horaRuta:any;
  horaFinRuta:any;

  // necesito un booleano para comprobar que el temporizador haya sido inicializado o no.



  constructor( private router: Router, private activatedRoute: ActivatedRoute, private _empleado: EmpleadosService,
    private _rutas: RutasService, private _contenedores: ContenedoresRutasService, private modalService: BsModalService, private _llenado: LlenadosService,
    private _tIncidencias: TiposincidenciaService ) {
    this._empleado.getEmpleado( this.idx ).subscribe( (e:any) =>{
      console.log( e );
      this.conductor = e;
    });

    this._rutas.getRuta( this.idruta ).subscribe( (r:any) => {
      console.log( "ruta" + r );
      this.ruta = r;
    });

     this._contenedores.getContenedoresRuta().subscribe( (contens:any) => {
      //console.log( "bamba " + contens);
       this.contenedores = contens;
     });

    // this._contenedores.getContenedorRuta( this.idruta ).subscribe( ( cn:any) =>{
    //   this.contenedores = cn;
    // });

    this.getLlenados();
    this.registrarIncidencia();
    //this.iniciarRuta();
    // this.inicioContador();
  }

  abrirModal( template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  abrirModal2( template2: TemplateRef<any>){
    this.modalRef = this.modalService.show(template2);
  }

  getLlenados(){
    return this._llenado.getLlenados().subscribe((ll:any) =>{
      this.llenados = ll;
    });
  }

  guardarNivel(){
    this.timestamp = new Date();
  }

  registrarIncidencia(){
    return this._tIncidencias.getTiposIncidencia().subscribe( (tis:any) => {
      console.log("tipode incidencia" + tis );
      this.tiposIncidencia = tis;
    });
  }

  iniciarRuta(){
    this.inicializado = true;
    this.temporizadorRuta = new Date();
    this.horaRuta = this.temporizadorRuta;
    //return this.horaRuta;
  }

  finalizarRuta(){
    this.finalizado = true;
    this.temporizadorFinRuta = new Date();
    this.horaFinRuta = this.temporizadorFinRuta;
  }


  // inicioContador(){
  //   let ini = this.inicializado;
  //   if( this.inicializado === true ){
  //     console.log(this.inicializado);
  //     return this.inicializado;
  //   } else {
  //     return ("Error de memoria");
  //   }
  //   // return ("Sin resultados.")
  // }

  ngOnInit(): void {
  }

}
