import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { MantenimientoModule } from '../models/mantenimientoModel';
import { AuthService } from './auth-service.service';
import { URL_BACKEND } from '../config/config';



export class Mantenimiento {
  idmantenimiento:number;
  fechamantenimiento:string;
  mantenimiento:string;
  proveedor:string;
  coste:number;
  numfactura:string;
  tipomante:number;
  idvehiculo:number;
}



@Injectable({
  providedIn: 'root'
})
export class MantenimientosService {

  //url = 'http://localhost:8093/mantenimiento';
  //urlv = 'http://localhost:8093/mantenimientov';
  //urlPage = 'http://localhost:8093/mantenimientopage';


   url = URL_BACKEND+'/mantenimiento';
   urlv = URL_BACKEND+'/mantenimientov';
   urlPage = URL_BACKEND+'/mantenimientopage';



  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  mant:any[] = [];

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute,  public _authService: AuthService) {
    console.log("servicio de mantenimientos funcionando ");
   }

   private agregarAuthorizationHeader() {
    let token = this._authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

   getMantenimientos(){
      return this.http.get(`${this.url}`,{ headers: this.agregarAuthorizationHeader() });
   }


   getMantenimientosPage(page:number){
    return this.http.get(`${ this.urlPage }/${page}`,{ headers: this.agregarAuthorizationHeader() })
    .pipe
    (tap((response:any) =>{
      //console.log("Clientes service tap1");
      (response.content as Mantenimiento[]).forEach(mantenimiento => {
        //console.log(localidad)
        this.mant.push(mantenimiento);
      });
    }),
    map(response => {
      (response.content as Mantenimiento[]).map(mantenimiento =>{
        mantenimiento.mantenimiento = mantenimiento.mantenimiento.toUpperCase();
        return mantenimiento;
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



   getMantenimiento( idx:number ){
    return this.http.get(`${ this.urlv}/${ idx }`,{ headers: this.agregarAuthorizationHeader() });
   }

   postMantenimiento( mantenimiento:MantenimientoModule ){
    return this.http.post(`${ this.url }`, mantenimiento, { headers: this.agregarAuthorizationHeader() });
   }

   postMantenimientoVehiculo( idvehiculo:number, mantenimiento:MantenimientoModule ){
    return this.http.post(`${ this.urlv }/${idvehiculo}`, mantenimiento, { headers: this.agregarAuthorizationHeader() });
   }

   putMantenimiento( idmanten:number, mantenimiento:MantenimientoModule ){
    return this.http.post(`${ this.url }/${ idmanten }`, mantenimiento, { headers: this.agregarAuthorizationHeader() });
   }

   deleteMantenimiento( idx:number ){
    return this.http.delete(`${this.url}/${idx}`,{ headers: this.agregarAuthorizationHeader() });
   }






}
