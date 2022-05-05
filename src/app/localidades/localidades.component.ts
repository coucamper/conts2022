import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ConcejosComarcasService } from '../services/concejoscomarcas.service';
import { LocalidadesService } from '../services/localidades.service';
import { PageEvent } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { ConcejoModel } from '../models/concejoModel';
import { tap } from 'rxjs/operators';



export class Localidad {
  idconcejo: number;
  denom: string;
}



@Component({
  selector: 'app-localidades',
  templateUrl: './localidades.component.html',
  styleUrls: ['./localidades.component.css'],
})
export class LocalidadesComponent implements OnInit {
  idx: number;
  res: any;
  defaultPage: number;
  localidad: Localidad[];
  localidades: any[] = [];
  items: any[] = this.localidades;
  pageOfItems: Array<any>;
  totalElements: number;
  localidadesActual: ConcejoModel = new ConcejoModel();
  arrayLocalidades: any[] = [];
  arr: any[] = [];

  paginador: any;

  page: any;

  constructor(
    private router: Router,
    private _localidades: LocalidadesService,
    private activatedRoute: ActivatedRoute,
    private paginator: NgxPaginationModule
  ) {
    this.getLocalidades();
  }

  getLocalidades() {
    // Esta parte de codigo es la que genera la ruta
    this.activatedRoute.paramMap.subscribe((params) => {
      this.page = this.activatedRoute.snapshot.paramMap.get('page');
      if (!this.page) {
        this.page = 0;
      }
    });
  }

  ngOnInit():void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let page = this.activatedRoute.snapshot.paramMap.get('page');
      if (!page) {
        this.page = 0;
      }

      this._localidades
        .getLocalidades(this.page)
        .pipe(
          tap((response) => {
            (response.content as Localidad[]).forEach((localidad) =>
              console.log(localidad.denom)
            );
          })
        )
        .subscribe((response) => {
          this.localidades = response.content as Localidad[];
          this.paginador = response;
          console.log(this.localidades);
        });
    });
  }
}
