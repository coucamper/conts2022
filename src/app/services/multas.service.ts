import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { MultaModule } from '../models/multaModel';
MultaModule



@Injectable({
  providedIn: 'root'
})
export class MultasService {

  url = 'http://localhost:8093/multa';
  url2 = 'http://localhost:8093/multav';

  constructor( private http: HttpClient, private activatedRoute:ActivatedRoute) {
    console.log("servicio de multas funcionando!");
   }

   getMultas(){
    return this.http.get(`${ this.url }`)
    .pipe( map( (data:any) => {
      return data;
    }));
  }


  getMulta( idx:number ){
    return this.http.get(`${ this.url }/${ idx }`);
  }


  postMulta( multa:MultaModule){
    return this.http.post(`${ this.url }`, multa );
  }

  putMulta( idx:number,  multa:MultaModule ){
    return this.http.put(`${ this.url}/${ idx }`, multa);
  }

  deleteMulta( idx:number ){
    return this.http.delete(`${ this.url }/${ idx }`);
  }


  getMultasPorVehiculo( idv:number ){
    return this.http.get(`${ this.url2 }/${ idv }`)
  }



}
