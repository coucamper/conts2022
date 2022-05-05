import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { tap } from 'rxjs/operators';
import { rutaModel } from '../models/rutaModel';
import { ComarcasRutaService } from '../services/comarcasruta.service';
import { ContenedoresService } from '../services/contenedores.service';
import { ContenedoresRutasService } from '../services/contenedoresrutas.service';
import { RutasService } from '../services/rutas.service';
import { ZonasService } from '../services/zonas.service';



export class Ruta {

  idruta: number;
  denom: string;
  zona: number;
  localidad: number;
  fechaini: string;
  periodo: string;
  ruta: string;
  ruta_idzona: string;


}






@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {

  aviso:boolean = false;
  rutas:any[] = [];
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
  page:any;
  paginador:any;
  items: any[] = this.rutas;
  pageOfItems: Array<any>;
  totalElements: number;

  constructor( private router:Router,
               private activatedRoute: ActivatedRoute,
               private _rutas: RutasService,
               private _comarcasRuta: ComarcasRutaService,
               private _contenRutas: ContenedoresRutasService,
               private paginator:NgxPaginationModule) {

      this.idx = this.activatedRoute.snapshot.params['id'];
      this.div1Function();
      //this.verRutas();
      this.getRutas();
      this.getZonas();
  }

  getRutas(){
        // Esta parte de codigo es la que genera la ruta
        this.activatedRoute.paramMap.subscribe(params =>{
          this.page = this.activatedRoute.snapshot.paramMap.get('page');
           if(!this.page){
             this.page = 0;
           }
         });
  }


  verRutas(){
    this._rutas.getRutas().subscribe((rutas:any) =>{
      this.rutas=rutas;
      console.log(this.rutas)
    });
  }


  verRuta( idx:number ){
    this._rutas.getRuta( this.idx ).subscribe( (res:any) => {
      //console.log( res);
      this.ruta = res;
    })
  }

  getZona(){
    this._comarcasRuta.getComarcaRuta( this.idx ).subscribe( (comarcaRuta:any) =>{
      this.zona=comarcaRuta;
      //console.log("Zona: "+this.zona);
    });
  }


  getZonas(){
    return this._comarcasRuta.getComarcasRuta().subscribe( (zs:any) => {
      this.zonas = zs;
    });
  }

  borrarRuta( ){
    return this._rutas.deleteRuta( this.idx ).subscribe( (dato:any) =>{
      //console.log("Ruta a borrar = " + dato.denom );
    });
  }

  onSelect(){
    this.rutasF = this.rutas.filter( r => r.zona == this.selec1 || r.localidad == this.selec2 );
   }

  div1Function(){
    this.div1 = !this.div1;
  }



  ngOnInit(): void {
    this.getRutas();
    this.idx = this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.paramMap.subscribe((params) => {
      let page = this.activatedRoute.snapshot.paramMap.get('page');
      if (!page) {
        this.page = 0;
      }

      this._rutas
        .getRutasPaginadas(this.page)
        .pipe(
          tap((response) => {
            (response.content as Ruta[]).forEach((ruta) =>
              console.log(ruta.denom)
            );
          })
        )
        .subscribe((response) => {
          this.rutas = response.content as Ruta[];
          this.paginador = response;
          console.log(this.rutas);
        });
    });

  }

  /*
    this.idx = this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.paramMap.subscribe((params) => {
      let page = this.activatedRoute.snapshot.paramMap.get('page');
      if (!page) {
        this.page = 0;
      }

      this._contenedores
        .getContenedoresPaginados(this.page)
        .pipe(
          tap((response) => {
            (response.content as Contenedor[]).forEach((contenedor) =>
              console.log(contenedor.denom)
            );
          })
        )
        .subscribe((response) => {
          this.contenedores = response.content as Contenedor[];
          this.paginador = response;
          console.log(this.contenedores);
        });
    });
  */

}
