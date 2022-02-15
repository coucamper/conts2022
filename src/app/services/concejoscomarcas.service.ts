

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { PesajeModel } from '../models/pesajeModel';



@Injectable({
  providedIn: 'root'
})
export class ConcejosComarcasService {

  url = 'http://localhost:8093/concejoscomarca';

  constructor( private http: HttpClient, private activatedRoute:ActivatedRoute ) {
    console.log("servicio de zonas funcionando!");
  }

  getConcejosComarcas(){
    return this.http.get(`${ this.url }`)
    .pipe( map( (data:any) => {
      console.log("Comarca? "+data)
      return data;
    }));
  }


  getConcejoComarca( idx:number ){
    console.log("ConcejosComarca"+this.http.get(`${ this.url }/${ idx }`));
    return this.http.get(`${ this.url }/${ idx }`);
  }




}
