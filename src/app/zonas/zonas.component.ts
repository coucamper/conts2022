import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { tap } from 'rxjs/operators';
import { ZonasService } from '../services/zonas.service';


export class Zona {

  idcomarca: number;
  denom: string;

}



@Component({
  selector: 'app-zonas',
  templateUrl: './zonas.component.html',
  styleUrls: ['./zonas.component.css']
})
export class ZonasComponent implements OnInit {

  idx:number;
  zonas:any[] = [];
  page:any;
  paginador:any;
  items: any[] = this.zonas;
  pageOfItems: Array<any>;
  totalElements: number;

  constructor(private router:Router,
              private _zonas: ZonasService,
              private activatedRoute: ActivatedRoute,
              private paginator:NgxPaginationModule ) {
                this.idx = this.activatedRoute.snapshot.params['id'];
                this.getZonas();
              }

              getZonas(){
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

      this._zonas
        .getZonasPage(this.page)
        .pipe(
          tap((response) => {
            (response.content as Zona[]).forEach((zona) =>
              console.log(zona.denom)
            );
          })
        )
        .subscribe((response) => {
          this.zonas = response.content as Zona[];
          this.paginador = response;
          console.log(this.zonas);
        });
    });
  }





}
