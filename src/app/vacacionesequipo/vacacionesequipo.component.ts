import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { tap } from 'rxjs/operators';
import { EmpleadoModel } from '../models/empleado';
import { vacacionEquipoModel } from '../models/vacacionequipoModel';
import { VacacionesequipoService } from '../services/vacacionesequipo.service';





export class Vacacion{

  idplanvacaciones:number;
  diasvacaciones:number;
  finiciovaca:string;
  ffinvaca:string;
  diasconsume:number;
  diasconsumidos:number;
  diasrestantes:number;
  empleado:EmpleadoModel;
  anyoanterior:string;
  pendientesanyoanterior:number;

}


@Component({
  selector: 'app-vacacionesequipo',
  templateUrl: './vacacionesequipo.component.html',
  styleUrls: ['./vacacionesequipo.component.css']
})
export class VacacionesequipoComponent implements OnInit {
  idx:number;
  vacacionesGlobales:any [] = [];

  page:any;
  paginador:any;
  items: any[] = this.vacacionesGlobales;
  pageOfItems: Array<any>;
  totalElements: number;
  constructor( private router: Router,
               private activatedRoute: ActivatedRoute,
               private _vacaciones: VacacionesequipoService,
               private vacacion: vacacionEquipoModel,
               private paginator:NgxPaginationModule ) {
                this.idx = this.activatedRoute.snapshot.params['id'];
    // this._vacaciones.getVacacionesequipo().subscribe( (vacaciones:any) =>{
    //   this.vacacionesGlobales = vacaciones;
       console.log(this.vacacionesGlobales);
    // });
              this.getVacaciones();

   }

   getVacaciones(){
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

      this._vacaciones
        .getVacacionesPage(this.page)
        .pipe(
          tap((response) => {
            (response.content as Vacacion[]).forEach((vacacion) =>
              console.log(vacacion.diasconsume)
            );
          })
        )
        .subscribe((response) => {
          this.vacacionesGlobales = response.content as Vacacion[];
          this.paginador = response;
          console.log("vacaciones globales")
          console.log(this.vacacionesGlobales);
        });
    });
  }

}
