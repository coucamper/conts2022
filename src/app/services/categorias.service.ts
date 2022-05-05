import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { URL_BACKEND } from '../config/config';
import { CategoriaModel } from '../models/categoriaModel';
import { AuthService } from './auth-service.service';




@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  // url = 'http://localhost:8093/categoria';

   url = URL_BACKEND +'/categoria';

  idx:number;

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor( private http: HttpClient, private activatedR: ActivatedRoute, public _authService: AuthService ) {

   }

   private agregarAuthorizationHeader() {
    let token = this._authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  getCategorias(){
    return this.http.get(`${ this.url }`,{ headers: this.agregarAuthorizationHeader() });
    }

  getCategoria( idx:number ){
    return this.http.get(`${ this.url }/${ idx }`,{ headers: this.agregarAuthorizationHeader() });
  }

  postCategoria( categoria:CategoriaModel ){
    return this.http.post(`${ this.url }`, categoria, { headers: this.agregarAuthorizationHeader() } );
  }

  putCategoria( idx:number, categoria:CategoriaModel ){
    return this.http.put(`${ this.url }/${ idx }`, categoria, { headers: this.agregarAuthorizationHeader() } );
  }

  deleteCategoria( idx:number ){
    return this.http.delete(`${ this.url }/${ idx }`, { headers: this.agregarAuthorizationHeader() });
  }

}
