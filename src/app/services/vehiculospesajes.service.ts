import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { VehiculosPesajesModel } from '../models/vehiculosPesajesModel';





@Injectable({
  providedIn: 'root'
})
export class VehiculosPesajesService {

  url = "http://localhost:8093/";

  constructor( private http: HttpClient,
               private activatedRoute:ActivatedRoute
    ) {
    console.log("servicio de vehiculosPesajes funcionando ");
  }


  getvehiculosPesajes(){
    return this.http.get('http://localhost:8093/vehiculospesajesws');
  }

  getVehiculoPesaje( idx : number){
    return this.http.get(`${this.url}vehiculospesajesws/${idx}`);
  }

  postVehiculoPesaje( vehipesa:VehiculosPesajesModel ){
    return this.http.post(`${ this.url }`, vehipesa );
  }

  putVehiculoPesaje( idx:number, vehipesa: VehiculosPesajesModel ){
    return this.http.put(`${ this.url }`, vehipesa );
  }

  deleteVehiculoPesaje( idx:number ){
    return this.http.delete(`${ this.url}/${ idx }`);
  }


}

