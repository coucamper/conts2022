import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service.service';
import { URL_BACKEND } from '../config/config';



export class localidad {
  id: number;
  denom: string;
}


@Injectable({
  providedIn: 'root'
})
export class LocalidadesService {
  localidades:any[] = [];
  localidad:any;
  loc:any[] = [];


  //url = 'http://localhost:8093/concejo';
  //urlPage = 'http://localhost:8093/concejopage';


   url = URL_BACKEND+'/concejo';
   urlPage = URL_BACKEND+'/concejopage';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor( private http: HttpClient, private activatedRoute:ActivatedRoute, public _authService: AuthService ) {
    //console.log("servicio de localidades funcionando!");
  }


  private agregarAuthorizationHeader() {
    let token = this._authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }




  getLocalidades( page:number ){
    return this.http.get(`${ this.urlPage }/${page}`,{ headers: this.agregarAuthorizationHeader() })
    .pipe
    (tap((response:any) =>{
      //console.log("Clientes service tap1");
      (response.content as localidad[]).forEach(localidad => {
        //console.log(localidad)
        this.localidades.push(localidad);
      });
    }),
    map(response => {
      (response.content as localidad[]).map(localidad =>{
        localidad.denom = localidad.denom.toUpperCase();
        return localidad;
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


  getLocalidad( idx:number ){
    return this.http.get(`${ this.url }/${ idx }`,{ headers: this.agregarAuthorizationHeader() });
  }



}
