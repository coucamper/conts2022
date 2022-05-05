import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { MultasService } from '../services/multas.service';


export class Multa {

  idmulta:number;
  fechamulta:string;
  causamulta:string;
  lugarmulta:string;
  importe:number;
  vehiculo:number;
  empleado:number;

}




@Component({
  selector: 'app-multas',
  templateUrl: './multas.component.html',
  styleUrls: ['./multas.component.css']
})
export class MultasComponent implements OnInit {
  idx:number;
  multas:any[] = [];
  page:any;
  paginador:any;
  items: any[] = this.multas;
  pageOfItems: Array<any>;
  totalElements: number;

  constructor(private route: Router,
              private activatedRoute: ActivatedRoute,
              private _multas: MultasService )
              {

                // this._multas.getMultas().subscribe((multas:any) =>{
                //   this.multas=multas;
                //   console.log(this.multas)
                // });

                this.getMultas();
               }


               getMultas(){
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

      this._multas
        .getMultasPage(this.page)
        .pipe(
          tap((response) => {
            (response.content as Multa[]).forEach((multa) =>
              console.log(multa.causamulta)
            );
          })
        )
        .subscribe((response) => {
          this.multas = response.content as Multa[];
          this.paginador = response;
          console.log(this.multas);
        });
    });
  }

}
