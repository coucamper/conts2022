import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ContenedorVOModule } from '../models/contenedor-vo/contenedorModel';
import { AuthService } from './auth-service.service';
import { URL_BACKEND } from '../config/config';


export class Contenedor{
  idcontenedor: number;
  zona: number;
  localidad: number;
  barrio: string;
  denom: string;
  ubicacion: string;
  coordenadas: string;
  mapa: string;
  fechaimplantacion: string;
}




@Injectable({
  providedIn: 'root'
})
export class ContenedoresService {

  //url = 'http://localhost:8093/contenedor';
  //urlPage = 'http://localhost:8093/contenedorpage';

   url = URL_BACKEND + '/contenedor';
   urlPage = URL_BACKEND + '/contenedorpage';

  cont:any[] = [];

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor( private http: HttpClient,
               private activatedRoute:ActivatedRoute,
               public _authService: AuthService ) {

  }

  private agregarAuthorizationHeader() {
    let token = this._authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }



  getContenedores(){
    return this.http.get(`${ this.url }`, { headers: this.agregarAuthorizationHeader() });
  }

  getContenedoresPaginados( page:number ){
    return this.http.get(`${ this.urlPage }/${page}`,{ headers: this.agregarAuthorizationHeader() })
    .pipe
    (tap((response:any) =>{
      //console.log("Clientes service tap1");
      (response.content as Contenedor[]).forEach(contenedor => {
        //console.log(localidad)
        this.cont.push(contenedor);
      });
    }),
    map(response => {
      (response.content as Contenedor[]).map(contenedor =>{
        contenedor.denom = contenedor.denom.toUpperCase();
        return contenedor;
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

  getContenedor( idx : number){
    return this.http.get(`${ this.url}/${ idx }`, { headers: this.agregarAuthorizationHeader() });
  }

  postContenedor( contenedor:ContenedorVOModule ){
    return this.http.post(`${ this.url }`, contenedor , { headers: this.agregarAuthorizationHeader() });
  }

  putContenedor( idx:number, contenedor:ContenedorVOModule ){
    return this.http.put(`${ this.url }/${ idx}`, contenedor , { headers: this.agregarAuthorizationHeader() });
  }

  deleteContenedor( idx:number ){
    return this.http.delete(`${ this.url }/${ idx }`,{ headers: this.agregarAuthorizationHeader() });
  }




}

