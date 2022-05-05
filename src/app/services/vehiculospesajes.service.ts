import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { VehiculosPesajesModel } from '../models/vehiculosPesajesModel';
import { AuthService } from './auth-service.service';
import { URL_BACKEND } from '../config/config';





export class VehiculosPesajes {

  idvehipesaje: number;
  idpesaje: number;
  idvehiculo:number;

}


@Injectable({
  providedIn: 'root'
})
export class VehiculosPesajesService {

  // url = "http://localhost:8093";
  // urlPage = 'http://localhost:8093/vehiculospesajeswspage';

  url = URL_BACKEND;
  urlPage = URL_BACKEND + '/vehiculospesajeswspage';


  vehics:any[] = [];



  constructor( private http: HttpClient,
               private activatedRoute:ActivatedRoute,
               public _authService: AuthService
    ) {
    console.log("servicio de vehiculosPesajes funcionando ");
  }


  private agregarAuthorizationHeader() {
    let token = this._authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  getvehiculosPesajes(){
    //return this.http.get('http://localhost:8093/vehiculospesajesws',{ headers: this.agregarAuthorizationHeader() });
    return this.http.get(URL_BACKEND+'/vehiculospesajesws',{ headers: this.agregarAuthorizationHeader() });
  }

  getvehiculosPesajesPaginados(page:number){
    return this.http.get(`${ this.urlPage }/${page}`,{ headers: this.agregarAuthorizationHeader() })
    .pipe
    (tap((response:any) =>{
      //console.log("Clientes service tap1");
      (response.content as VehiculosPesajes[]).forEach(vehiculosPesajes => {
        //console.log(localidad)
        this.vehics.push(vehiculosPesajes);
      });
    }),
    map(response => {
      (response.content as VehiculosPesajes[]).map(vehiculosPesajes =>{
        return vehiculosPesajes;
      });
      return response;
    }),
    tap(response =>{
     // console.log("Clientes tap 2");
      response.content.forEach((vehiculosPesajes:any) =>{
       // console.log(localidad.denom)
      })
    }));
  }

  getVehiculoPesaje( idx : number){
    return this.http.get(`${this.url}vehiculospesajesws/${idx}`,{ headers: this.agregarAuthorizationHeader() });
  }

  postVehiculoPesaje( vehipesa:VehiculosPesajesModel ){
    return this.http.post(`${ this.url }`, vehipesa, { headers: this.agregarAuthorizationHeader() } );
  }

  putVehiculoPesaje( idx:number, vehipesa: VehiculosPesajesModel ){
    return this.http.put(`${ this.url }`, vehipesa,{ headers: this.agregarAuthorizationHeader() } );
  }

  deleteVehiculoPesaje( idx:number ){
    return this.http.delete(`${ this.url}/${ idx }`,{ headers: this.agregarAuthorizationHeader() });
  }


}

