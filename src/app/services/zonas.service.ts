

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { PesajeModel } from '../models/pesajeModel';



@Injectable({
  providedIn: 'root'
})
export class ZonasService {

  url = 'http://localhost:8093/comarca';

  constructor( private http: HttpClient, private activatedRoute:ActivatedRoute ) {
    console.log("servicio de zonas funcionando!");
  }

  getZonas(){
    return this.http.get(`${ this.url }`)
    .pipe( map( (data:any) => {
      return data;
    }));
  }

  getComarcas(){
    return this.http.get(`${ this.url }`);
  }


  getZona( idx:number ){
    return this.http.get(`${ this.url }/${ idx }`);
  }


  deletePesaje( idx:number ){
    return this.http.delete(`${ this.url }/${ idx }`);
  }

}
