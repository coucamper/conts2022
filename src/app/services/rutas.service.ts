import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { rutaModel } from '../models/rutaModel';
import { AuthService } from './auth-service.service';
import { URL_BACKEND } from '../config/config';


export class Ruta {

  idruta: number;
  denom: string;
  zona: number;
  localidad: number;
  fechaini: string;
  periodo: string;
  ruta: string;
  ruta_idzona: string;

}



@Injectable({
  providedIn: 'root'
})
export class RutasService {

  //url = 'http://localhost:8093/ruta';
  //urlPage = 'http://localhost:8093/rutapage';

  url = URL_BACKEND + '/ruta';
  urlPage = URL_BACKEND + '/rutapage';



  rut:any[] = [];

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor( private http: HttpClient,
               private activatedRoute:ActivatedRoute, public _authService: AuthService) {
    console.log("Servicio rutas funcionando! ");
  }

  private agregarAuthorizationHeader() {
    let token = this._authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  getRutas(){
    return this.http.get(`${ this.url }`,{ headers: this.agregarAuthorizationHeader() })
    .pipe( map( (data:any) => {
      return data;
    }));
  }


  getRutasPaginadas(page:number){
    return this.http.get(`${ this.urlPage }/${page}`,{ headers: this.agregarAuthorizationHeader() })
    .pipe
    (tap((response:any) =>{
      //console.log("Clientes service tap1");
      (response.content as Ruta[]).forEach(ruta => {
        //console.log(localidad)
        this.rut.push(ruta);
      });
    }),
    map(response => {
      (response.content as Ruta[]).map(ruta =>{
        ruta.denom = ruta.denom.toUpperCase();
        return ruta;
      });
      return response;
    }),
    tap(response =>{
     // console.log("Clientes tap 2");
      response.content.forEach((ruta:any) =>{
       // console.log(localidad.denom)
      })
    }));
  }



  getRuta( idx: number ) {
    return this.http.get(`${this.url}/${ idx }`,{ headers: this.agregarAuthorizationHeader() });
  }

  saveRuta( ruta:rutaModel ){
    return this.http.post(`${ this.url }`,ruta, { headers: this.agregarAuthorizationHeader() });
  }

  updateRuta( idx:number, ruta:rutaModel ){
    return this.http.put(`${ this.url }/${ idx }`, ruta, { headers: this.agregarAuthorizationHeader() });
  }

  deleteRuta( idx:number ){
    return this.http.delete(`${ this.url }/${ idx }`,{ headers: this.agregarAuthorizationHeader() });
  }





}
