import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ConcejosComarcasService } from '../services/concejoscomarcas.service';
import { LocalidadesService } from '../services/localidades.service';
import { PageEvent } from '@angular/material/paginator';



@Component({
  selector: 'app-localidades',
  templateUrl: './localidades.component.html',
  styleUrls: ['./localidades.component.css'],

})
export class LocalidadesComponent implements OnInit {


  localidades:any[] = [];
  items:any [] = this.localidades;
  pageOfItems: Array<any>;
  totalElements:number;
  constructor(private router:Router,
              private _localidades: LocalidadesService) {
                this.getLocalidades();
              }

  getLocalidades(){
    this._localidades.getLocalidades().subscribe((locs:any) =>{
      this.localidades=locs;
      console.log(this.localidades)

      for( let l in this.localidades){
        console.log("Huli " + this.localidades[l]);
      }

    })
  }


//  getLocalidades(request:any) {
//     this._localidades.getLocalidades()
//     .subscribe((content:any) => {
//         this.localidades = content['content'];
//         this.totalElements = content['totalElements'];
//         console.log(this.localidades);
//     }
//     , error => {
//         console.log(error.error.message);
//     }
//     );
// }



  ngOnInit(): void {
    // this.getLocalidades({ page: "0", size: "5" });
  }





}
