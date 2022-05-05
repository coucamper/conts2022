import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { PesajeModel } from '../models/pesajeModel';
import { AuthService } from './auth-service.service';
import { URL_BACKEND } from '../config/config';



export class Pesaje {

  idpesaje: number;
  fechapesaje: number;
  pesaje: number;
  vehiculo: string;
  idoperario: number;
  idruta: number;

}


@Injectable({
  providedIn: 'root'
})
export class PesajesService {

  //url = 'http://localhost:8093/pesaje';
  //urlByFecha = 'http://localhost:8093/pesajebyfecha';
  //urlPage = 'http://localhost:8093/pesajepage';
  //urlRecuperar = 'http://localhost:8093/recuperarpesaje';

  url = URL_BACKEND + '/pesaje';
  urlByFecha = URL_BACKEND + '/pesajebyfecha';
  urlPage = URL_BACKEND + '/pesajepage';
  urlRecuperar = URL_BACKEND + '/recuperarpesaje';


  pes:any[] = [];

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

  getPesajes(){
    return this.http.get(`${ this.url }`,{ headers: this.agregarAuthorizationHeader() })
    .pipe( map( (data:any) => {
      return data;
    }));
  }

  getPesajesPaginados(page:number){
    return this.http.get(`${ this.urlPage }/${page}`,{ headers: this.agregarAuthorizationHeader() })
    .pipe
    (tap((response:any) =>{
      //console.log("Clientes service tap1");
      (response.content as Pesaje[]).forEach(pesaje => {
        //console.log(localidad)
        this.pes.push(pesaje);
      });
    }),
    map(response => {
      (response.content as Pesaje[]).map(pesaje =>{
        return pesaje;
      });
      return response;
    }),
    tap(response =>{
     // console.log("Clientes tap 2");
      response.content.forEach((pesaje:any) =>{
       // console.log(localidad.denom)
      })
    }));
  }


  getPesajesEntreFechas( fechainicio:string, fechafin:string ){
    return this.http.get(`${ this.urlByFecha }/${fechainicio}/${fechafin}`,{ headers: this.agregarAuthorizationHeader() });
  }


  getPesaje( idx:number ){
    return this.http.get(`${ this.url }/${ idx }`,{ headers: this.agregarAuthorizationHeader() });
  }


  postPesaje( idruta:number, idempleado:number, idvehiculo:number, pesaje:PesajeModel){
    return this.http.post(`${ this.url }/${idruta}/${idempleado}/${idvehiculo}`, pesaje, { headers: this.agregarAuthorizationHeader() } );
  }

  putPesaje( idx:number, pesaje:PesajeModel ){
    return this.http.put(`${ this.url}/${ idx }`, pesaje, { headers: this.agregarAuthorizationHeader() });
  }

  deletePesaje( idx:number ){
    return this.http.delete(`${ this.url }/${ idx }`,{ headers: this.agregarAuthorizationHeader() });
  }


  recuperarPesaje(fechapesaje:string, idruta:number, idoperario:number){
    return this.http.get(`${ this.urlRecuperar}/${fechapesaje}/${idruta}/${idoperario}`, { headers: this.agregarAuthorizationHeader() });
  }

}
