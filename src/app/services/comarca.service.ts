import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ClienteModel } from '../models/clienteModel';
import { AuthService } from './auth-service.service';
import { URL_BACKEND } from '../config/config';


export class Zona {

  idcomarca: number;
  denom: string;

}


@Injectable({
  providedIn: 'root'
})
export class ComarcaService {

  //url = 'http://localhost:8093/comarca';
  //urlPage = 'http://localhost:8093/comarcapage';

   url = URL_BACKEND + '/comarca';
   urlPage = URL_BACKEND + '/comarcapage';



  zon:any[] = [];

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor( private http: HttpClient,
               private activatedRoute:ActivatedRoute,
               public _authService: AuthService
    ) {

  }

  private agregarAuthorizationHeader() {
    let token = this._authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  getComarcas(){
    return this.http.get(`${ this.url}`,{ headers: this.agregarAuthorizationHeader() });
  }

  getComarcasPage(page:number){
    return this.http.get(`${ this.urlPage }${page}`,{ headers: this.agregarAuthorizationHeader() })
    .pipe
    (tap((response:any) =>{
      //console.log("Clientes service tap1");
      (response.content as Zona[]).forEach(zona => {
        //console.log(localidad)
        this.zon.push(zona);
      });
    }),
    map(response => {
      (response.content as Zona[]).map(zona =>{
        zona.denom = zona.denom.toUpperCase();
        return zona;
      });
      return response;
    }),
    tap(response =>{
     // console.log("Clientes tap 2");
      response.content.forEach((zona:any) =>{
       // console.log(localidad.denom)
      })
    }));
  }

}
