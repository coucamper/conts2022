import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { VehiculoModel } from '../models/vehiculoModel';
import { AuthService } from './auth-service.service';
import { URL_BACKEND } from '../config/config';




export class Vehiculo {

  idvehiculo: number;
  matricula: string;
  marca: string;
  modelo: string;
  fechacompra: string;

}


@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  vehiculo = new VehiculoModel();
/*   vehiculoURL = 'http://localhost:8093/vehiculo';
  url = 'http://localhost:8093/';
  urlPage = 'http://localhost:8093/vehiculopage'; */

  vehiculoURL = URL_BACKEND + '/vehiculo';
  url = URL_BACKEND;
  urlPage = URL_BACKEND + '/vehiculopage';

  vei:any[] = [];

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor( private http: HttpClient, private activatedRoute: ActivatedRoute, public _authService: AuthService ) {
    console.log("servicio de vehiculos funcionando ");
    this.vehiculo = new VehiculoModel();

  }

  private agregarAuthorizationHeader() {
    let token = this._authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  detalleVehiculo( idx:number) {
    return this.http.get<VehiculoModel>( `${ this.url }vehiculo/${ idx }`,{ headers: this.agregarAuthorizationHeader() })
    .pipe(
      map( (em:any) => {
        console.log(em);
        this.vehiculo = em;
      })
    )
  }


  getVehiculos(){
    return this.http.get( this.vehiculoURL,{ headers: this.agregarAuthorizationHeader() } )
    .pipe( map( (data:any) => {
      return data;
    }));
  }

  getVehiculosPage(page:number){
    return this.http.get(`${ this.urlPage }/${page}`,{ headers: this.agregarAuthorizationHeader() })
    .pipe
    (tap((response:any) =>{
      //console.log("Clientes service tap1");
      (response.content as Vehiculo[]).forEach(vehiculo => {
        //console.log(localidad)
        this.vei.push(vehiculo);
      });
    }),
    map(response => {
      (response.content as Vehiculo[]).map(vehiculo =>{
        vehiculo.matricula = vehiculo.matricula.toUpperCase();
        return vehiculo;
      });
      return response;
    }),
    tap(response =>{
     // console.log("Clientes tap 2");
      response.content.forEach((vehiculo:any) =>{
       // console.log(localidad.denom)
      })
    }));
  }

  getVehiculo( idx:number){
    return this.http.get( `${ this.url}vehiculo/${ idx }`,{ headers: this.agregarAuthorizationHeader() });
  }


  postVehiculo( vehiculo: VehiculoModel ){
    return this.http.post<VehiculoModel>('http://localhost:8093/vehiculo', vehiculo, { headers: this.agregarAuthorizationHeader() });
  }


  deleteVehiculo( idx:number){
    return this.http.delete<any>( `${ this.url}vehiculo/${ idx }`,{ headers: this.agregarAuthorizationHeader() } );
  }


  putVehiculo( idx:number, vehiculo: VehiculoModel){
    console.log(vehiculo);
    return this.http.put( `${ this.url }vehiculo/${ idx }`, vehiculo, { headers: this.agregarAuthorizationHeader() });
  }



}







