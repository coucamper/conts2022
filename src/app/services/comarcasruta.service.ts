
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { PesajeModel } from '../models/pesajeModel';
import { ComarcasRutaModel } from '../models/comarcasrutaModel';
import { AuthService } from './auth-service.service';
import { URL_BACKEND } from '../config/config';





@Injectable({
  providedIn: 'root'
})
export class ComarcasRutaService {

  //url = 'http://localhost:8093/comarcasruta';

   url = URL_BACKEND + '/comarcasruta';

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

  getComarcasRuta(){
    return this.http.get(`${ this.url }`,{ headers: this.agregarAuthorizationHeader() })
    .pipe( map( (data:any) => {
      for(let x in data){
        console.log(data[x])
      }
      return data;
    }));
  }


  getComarcaRuta( idx:number ){
    console.log("Comarca"+this.http.get(`${ this.url }/${ idx }`,{ headers: this.agregarAuthorizationHeader() }));
    return this.http.get(`${ this.url }/${ idx }`);
  }



}
