import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { MantenimientoModule } from '../models/mantenimientoModel';

@Injectable({
  providedIn: 'root'
})
export class MantenimientosService {

  url = 'http://localhost:8093/mantenimiento';
  urlv = 'http://localhost:8093/mantenimientov';

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    console.log("servicio de mantenimientos funcionando ");
   }


   getMantenimientos(){
      return this.http.get(`${this.url}`);
   }

   getMantenimiento( idx:number ){
    return this.http.get(`${ this.urlv}/${ idx }`);
   }

   postMantenimiento( mantenimiento:MantenimientoModule ){
    return this.http.post(`${ this.url }`, mantenimiento);
   }

   postMantenimientoVehiculo( idvehiculo:number, mantenimiento:MantenimientoModule ){
    return this.http.post(`${ this.urlv }/${idvehiculo}`, mantenimiento);
   }

   putMantenimiento( idmanten:number, mantenimiento:MantenimientoModule ){
    return this.http.post(`${ this.url }/${ idmanten }`, mantenimiento);
   }

   deleteMantenimiento( idx:number ){
    return this.http.delete(`${this.url}/${idx}`);
   }






}
