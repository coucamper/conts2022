import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AvisoModel } from '../models/avisoModel';
import { AvisosService } from '../services/avisos.service';
import { ComarcasRutaService } from '../services/comarcasruta.service';
import { ContenedoresService } from '../services/contenedores.service';
import { ContenedoresRutasService } from '../services/contenedoresrutas.service';
import { RutasService } from '../services/rutas.service';
import { ZonasService } from '../services/zonas.service';
import { PageEvent } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';



export class AvisoPage {
  idaviso:number;
  asunto:string;
  contenido:string;
  fechahora:string;
  idremitente:number;
}



@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent implements OnInit {

  aviso:boolean = false;
  avisos:any[] = [];
  avisoPage:AvisoPage[];
  avisosPages:any[] = [];
  rutasF:any[] = [];
  zonas:any[] = [];
  zona:any[] = [];
  ruta:any[] = [];
  idx:number;

  fecha = new Date();
  mes = new Date().toLocaleString( 'default', { month: 'long' } );
  anio = new Date().getFullYear().toLocaleString();

  div1:boolean=false;

  selec1:string;
  selec2:string;

  items:any [] = this.avisosPages;
  pageOfItems: Array<any>;
  totalElements:number;
  paginador:any;

  page:any;




  constructor( private router:Router,
               private activatedRoute: ActivatedRoute,
               private _avisos: AvisosService,
               private _comarcasRuta: ComarcasRutaService,
               private _contenRutas: ContenedoresRutasService,
               private paginator:NgxPaginationModule ) {

      this.idx = this.activatedRoute.snapshot.params['id'];

      this._avisos.getAvisos().subscribe((avisos:any) =>{
        this.avisos=avisos;
      });

      this.getAvisosPage();

  }

  getAvisosPage(){
    // Esta parte de codigo es la que genera la ruta
    this.activatedRoute.paramMap.subscribe(params =>{
    this.page = this.activatedRoute.snapshot.paramMap.get('page');
     if(!this.page){
       this.page = 0;
     }
   });

  }


  eliminarAviso(idaviso:any){
    this._avisos.deleteAviso(idaviso).subscribe();
  }


  div1Function(){
    this.div1 = !this.div1;
  }

  refresh(): void {
    window.location.reload();
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      let page = this.activatedRoute.snapshot.paramMap.get('page');
       if(!page){
         this.page = 0;
      }

    this._avisos.getAvisosPaginados(this.page)
    .pipe(
      tap(response => {
        (response.content as AvisoPage[]).forEach(aviso => console.log(aviso.asunto));
      })
    ).subscribe(response => {
      this.avisosPages = response.content as AvisoPage[];
      this.paginador = response;
      console.log(this.avisosPages)
    });
});
  }


}
