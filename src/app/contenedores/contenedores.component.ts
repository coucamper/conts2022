import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { tap } from 'rxjs/operators';
import { ContenedorVOModule } from '../models/contenedor-vo/contenedorModel';
import { ContenedoresService } from '../services/contenedores.service';




export class Contenedor{
  idcontenedor: number;
  zona: number;
  localidad: number;
  barrio: string;
  denom: string;
  ubicacion: string;
  coordenadas: string;
  mapa: string;
  fechaimplantacion: string;
}



@Component({
  selector: 'app-contenedores',
  templateUrl: './contenedores.component.html',
  styleUrls: ['./contenedores.component.css']
})
export class ContenedoresComponent implements OnInit {

  contenedores:any[] = [];
  contenedoresPage:any[] = [];

  contenedor:ContenedorVOModule = new ContenedorVOModule();
  idx:number;
  idExiste:boolean;

  fecha = new Date();
  mes = new Date().toLocaleString( 'default', { month: 'long' } );
  anio = new Date().getFullYear().toLocaleString();
  paginador:any;
  items: any[] = this.contenedores;
  pageOfItems: Array<any>;
  totalElements: number;
  page:any;

  constructor( private router:Router,
               private _contenedores: ContenedoresService,
               private activatedRoute: ActivatedRoute,
               private paginator:NgxPaginationModule ) {

                this.getContenedores();


    }


    getContenedores(){

    // Esta parte de codigo es la que genera la ruta
    this.activatedRoute.paramMap.subscribe(params =>{
    this.page = this.activatedRoute.snapshot.paramMap.get('page');
     if(!this.page){
       this.page = 0;
     }
   });


    }

  ngOnInit(): void {
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

  }


  eliminarContenedor( idcont:number ){
    this._contenedores.deleteContenedor( idcont ).subscribe();
  }


  refresh(): void {
    window.location.reload();
  }
}


