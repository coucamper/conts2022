

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { PesajeModel } from '../models/pesajeModel';
import { AuthService } from './auth-service.service';
import { URL_BACKEND } from '../config/config';




@Injectable({
  providedIn: 'root'
})
export class ConcejosComarcasService {

  //url = 'http://localhost:8093/concejoscomarca';
  //url2 = 'http://localhost:8093/concejosporcomarca';

   url = URL_BACKEND + '/concejoscomarca';
   url2 = URL_BACKEND + '/concejosporcomarca';





  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor( private http: HttpClient, private activatedRoute:ActivatedRoute, public _authService: AuthService ) {

  }

  private agregarAuthorizationHeader() {
    let token = this._authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  getConcejosComarcas(){
    return this.http.get(`${ this.url }`,{ headers: this.agregarAuthorizationHeader() })
    .pipe( map( (data:any) => {
      console.log("Comarca? "+data)
      return data;
    }));
  }


  getConcejoComarca( idx:number ){
    console.log("ConcejosComarca"+this.http.get(`${ this.url }/${ idx }`,{ headers: this.agregarAuthorizationHeader() }));
    return this.http.get(`${ this.url }/${ idx }`);
  }

  getConcejosPorComarca( idcomarca:number){
    return this.http.get(`${ this.url2 }/${ idcomarca }`,{ headers: this.agregarAuthorizationHeader() });
  }



}
