import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { URL_BACKEND } from '../config/config';
import { AvisoModel } from '../models/avisoModel';
import { AuthService } from './auth-service.service';




export class avisoPage {
  idaviso:number;
  asunto:string;
  contenido:string;
  fechahora:string;
  idremitente:number;
}

@Injectable({
  providedIn: 'root'
})
export class AvisosService {

  //url = 'http://localhost:8093/aviso';
  //urlpage = 'http://localhost:8093/avisopage/';

   url = URL_BACKEND + '/aviso';
   urlpage = URL_BACKEND + '/avisopage/';

  idx:number;

  aviso:any[] = [];

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor( private http: HttpClient, private activatedR: ActivatedRoute, private _authService: AuthService ) {
   }

   private agregarAuthorizationHeader() {
    let token = this._authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  getAvisos(){
    return this.http.get(`${ this.url }`,{ headers: this.agregarAuthorizationHeader() });
  }

  // getAvisosPaginados(page:number){
  //   return this.http.get(`${ this.urlpage }${page}`,{ headers: this.agregarAuthorizationHeader() });
  // }


  getAvisosPaginados( page:number ){
    return this.http.get(`${ this.urlpage }${page}`,{ headers: this.agregarAuthorizationHeader() })
    .pipe
    (tap((response:any) =>{
      //console.log("Clientes service tap1");
      (response.content as avisoPage[]).forEach(aviso => {
        //console.log(localidad)
        this.aviso.push(aviso);
      });
    }),
    map(response => {
      (response.content as avisoPage[]).map(aviso =>{
        aviso.asunto = aviso.asunto.toUpperCase();
        return aviso;
      });
      return response;
    }),
    tap(response =>{
     // console.log("Clientes tap 2");
      response.content.forEach((localidad:any) =>{
       // console.log(localidad.denom)
      })
    }));
  }




  getAviso( idx:number ){
    return this.http.get(`${ this.url }/${ idx }`,{ headers: this.agregarAuthorizationHeader() });
  }

  postAviso( idremitente:number, aviso:AvisoModel ){
    return this.http.post(`${ this.url }/${idremitente}`, aviso, { headers: this.agregarAuthorizationHeader() } );
  }

  putAviso( idx:number, aviso:AvisoModel ){
    return this.http.put(`${ this.url }/${ idx }`, aviso, { headers: this.agregarAuthorizationHeader() } );
  }

  deleteAviso( idx:number ){
    return this.http.delete(`${this.url}/${Number(idx)}`,{ headers: this.agregarAuthorizationHeader() });
  }

}
