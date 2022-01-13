

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { PesajeModel } from '../models/pesajeModel';



@Injectable({
  providedIn: 'root'
})
export class ZonasService {

  url = 'http://localhost:8093/zonas';

  constructor( private http: HttpClient, private activatedRoute:ActivatedRoute ) {
    console.log("servicio de zonas funcionando!");
  }

  getZonas(){
    return this.http.get(`${ this.url }`)
    .pipe( map( (data:any) => {
      return data;
    }));
  }


  getZona( idx:number ){
    return this.http.get(`${ this.url }/${ idx }`);
  }


  // postZona( zonas:PesajeModel){
  //   return this.http.post(`${ this.url }`, pesaje );
  // }

  // putPesaje( idx:number, pesaje:PesajeModel ){
  //   return this.http.put(`${ this.url}/${ idx }`, pesaje);
  // }

  deletePesaje( idx:number ){
    return this.http.delete(`${ this.url }/${ idx }`);
  }

}
