
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { PesajeModel } from '../models/pesajeModel';
import { ComarcasRutaModel } from '../models/comarcasrutaModel';




@Injectable({
  providedIn: 'root'
})
export class ComarcasRutaService {

  url = 'http://localhost:8093/comarcasruta';

  constructor( private http: HttpClient, private activatedRoute:ActivatedRoute ) {
    console.log("servicio de comarcas de ruta funcionando!");
  }

  getComarcasRuta(){
    return this.http.get(`${ this.url }`)
    .pipe( map( (data:any) => {
      for(let x in data){
        console.log(data[x])
      }
      return data;
    }));
  }


  getComarcaRuta( idx:number ){
    console.log("Comarca"+this.http.get(`${ this.url }/${ idx }`));
    return this.http.get(`${ this.url }/${ idx }`);
  }



}
