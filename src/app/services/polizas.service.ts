import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { PolizaModule } from '../models/polizaModel';

@Injectable({
  providedIn: 'root'
})
export class PolizasService {

  url = 'http://localhost:8093/poliza';
  url2 = 'http://localhost:8093/polizav';

  constructor( private http: HttpClient, private activatedRoute:ActivatedRoute ) {
    console.log("servicio de polizas funcionando!");
   }


   getPolizas(){
    return this.http.get(`${ this.url }`)
    .pipe( map( (data:any) => {
      return data;
    }));
  }


  getPoliza( idx:number ){
    return this.http.get(`${ this.url }/${ idx }`);
  }

  getPolizaPorVehiculo( idx:number ){
    return this.http.get(`${ this.url2 }/${ idx }`);
  }


  postPoliza( poliza:PolizaModule){
    return this.http.post(`${ this.url }`, poliza );
  }

  putPoliza( idx:number, poliza:PolizaModule ){
    return this.http.put(`${ this.url}/${ idx }`, poliza);
  }

  deletePoliza( idx:number ){
    return this.http.delete(`${ this.url }/${ idx }`);
  }
}
