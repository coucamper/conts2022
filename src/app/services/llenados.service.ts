import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LlenadoModel } from '../models/llenadoModel';



@Injectable({
  providedIn: 'root'
})
export class LlenadosService {

  url = 'http://localhost:8093/llenados';

  constructor( private _http: HttpClient, private http: HttpClientModule, private llenado: LlenadoModel, private activatedRoute: ActivatedRoute) {

  }


  getLlenados(){
    return this._http.get(`${ this.url }`);
  }

  getLlenado( idx:number ){
    return this._http.get(`${ this.url }/${ idx }`);
  }

  postLlenado( llenado: LlenadoModel ){
    return this._http.post(`${ this.url }`, llenado );
  }

  putLlenado( idx:number, llenado:LlenadoModel ){
    return this._http.put(`${ this.url }/${ idx }`, llenado );
  }

  deleteLlenado( idx:number ){
    return this._http.delete(`${ this.url }/${ idx }` );
  }

}
