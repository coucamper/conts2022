import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { VehiculoModel } from '../models/vehiculoModel';




@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  vehiculo = new VehiculoModel();



  vehiculoURL = 'http://localhost:8093/vehiculo';
  url = 'http://localhost:8093/';

  constructor( private http: HttpClient, private activatedRoute: ActivatedRoute ) {
    console.log("servicio de vehiculos funcionando ");
    this.vehiculo = new VehiculoModel();

  }

  detalleVehiculo( idx:number) {
    return this.http.get<VehiculoModel>( `${ this.url }vehiculo/${ idx }`)
    .pipe(
      map( (em:any) => {
        console.log(em);
        this.vehiculo = em;
      })
    )
  }


  getVehiculos(){
    return this.http.get( this.vehiculoURL )
    .pipe( map( (data:any) => {
      return data;
    }));
  }


  getVehiculo( idx:number){
    return this.http.get( `${ this.url}vehiculo/${ idx }`);
  }


  postVehiculo( vehiculo: VehiculoModel ){
    return this.http.post<VehiculoModel>('http://localhost:8093/vehiculo', vehiculo);
  }


  deleteVehiculo( idx:number){
    return this.http.delete<any>( `${ this.url}vehiculo/${ idx }` );
  }


  putVehiculo( idx:number, vehiculo: VehiculoModel){
    console.log(vehiculo);
    return this.http.put( `${ this.url }vehiculo/${ idx }`, vehiculo );
  }



}







