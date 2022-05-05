import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { URL_BACKEND } from '../config/config';
import { LlenadoModel } from '../models/llenadoModel';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class LlenadosService {

  //url = 'http://localhost:8093/llenados';

   url = URL_BACKEND+'/llenados';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor( private _http: HttpClient, private http: HttpClientModule, public llenado: LlenadoModel, private activatedRoute: ActivatedRoute, public _authService: AuthService) {

  }

  private agregarAuthorizationHeader() {
    let token = this._authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }



  getLlenados(){
    return this._http.get(`${ this.url }`,{ headers: this.agregarAuthorizationHeader() });
  }

  getLlenado( idx:number ){
    return this._http.get(`${ this.url }/${ idx }`,{ headers: this.agregarAuthorizationHeader() });
  }

  postLlenado( llenado: LlenadoModel ){
    return this._http.post(`${ this.url }`, llenado, { headers: this.agregarAuthorizationHeader() } );
  }

  putLlenado( idx:number, llenado:LlenadoModel ){
    return this._http.put(`${ this.url }/${ idx }`, llenado, { headers: this.agregarAuthorizationHeader() } );
  }

  deleteLlenado( idx:number ){
    return this._http.delete(`${ this.url }/${ idx }`, { headers: this.agregarAuthorizationHeader() } );
  }

}
