import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { PolizasService } from '../services/polizas.service';




export class Poliza {

  idpoliza:number;
  numpoliza:string;
  aseguradora:string;
  fechapoliza:string;
  modalidad:string;
  franquicia:number;
  importepoliza:number;
  periodofact:string;
  vehiculo:number;

}




@Component({
  selector: 'app-polizas',
  templateUrl: './polizas.component.html',
  styleUrls: ['./polizas.component.css']
})
export class PolizasComponent implements OnInit {
  idx:number;
  polizas:any[] = [];

  page:any;
  paginador:any;
  items: any[] = this.polizas;
  pageOfItems: Array<any>;
  totalElements: number;

  constructor(
              private route: Router,
              private activatedRoute: ActivatedRoute,
              private _polizas: PolizasService
              )

              {

                // this._polizas.getPolizas().subscribe((pols:any) =>{
                //   this.polizas=pols;
                //   console.log(this.polizas)
                // })

                this.getPolizas();

              }

              getPolizas(){
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

      this._polizas
        .getPolizasPage(this.page)
        .pipe(
          tap((response) => {
            (response.content as Poliza[]).forEach((poliza) =>
              console.log(poliza.numpoliza)
            );
          })
        )
        .subscribe((response) => {
          this.polizas = response.content as Poliza[];
          this.paginador = response;
          console.log(this.polizas);
        });
    });

  }

}
