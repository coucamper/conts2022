import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { MultaModule } from '../models/multaModel';
import { AuthService } from './auth-service.service';
import { URL_BACKEND } from '../config/config';



export class Multa{

  idmulta:number;
  fechamulta:string;
  causamulta:string;
  lugarmulta:string;
  importe:number;
  vehiculo:number;
  empleado:number;

}



@Injectable({
  providedIn: 'root'
})
export class MultasService {

  //url = 'http://localhost:8093/multa';
  //url2 = 'http://localhost:8093/multav';
  //urlPage = 'http://localhost:8093/multapage';


   url = URL_BACKEND+'/multa';
   url2 = URL_BACKEND+'/multav';
   urlPage = URL_BACKEND+'/multapage';



  mul:any[] = [];

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor( private http: HttpClient, private activatedRoute:ActivatedRoute, public _authService: AuthService) {
    console.log("servicio de multas funcionando!");
   }

   private agregarAuthorizationHeader() {
    let token = this._authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

   getMultas(){
    return this.http.get(`${ this.url }`,{ headers: this.agregarAuthorizationHeader() })
    .pipe( map( (data:any) => {
      return data;
    }));
  }

  getMultasPage(page:number){
    return this.http.get(`${ this.urlPage }/${page}`,{ headers: this.agregarAuthorizationHeader() })
    .pipe
    (tap((response:any) =>{
      //console.log("Clientes service tap1");
      (response.content as Multa[]).forEach(multa => {
        //console.log(localidad)
        this.mul.push(multa);
      });
    }),
    map(response => {
      (response.content as Multa[]).map(multa =>{
        multa.causamulta = multa.causamulta.toUpperCase();
        return multa;
      });
      return response;
    }),
    tap(response =>{
     // console.log("Clientes tap 2");
      response.content.forEach((multa:any) =>{
       // console.log(localidad.denom)
      })
    }));
  }

  getMulta( idx:number ){
    return this.http.get(`${ this.url }/${ idx }`,{ headers: this.agregarAuthorizationHeader() });
  }


  postMulta( idempleado:number, idvehiculo:number, multa:MultaModule){
    return this.http.post(`${ this.url }/${idempleado}/${idvehiculo}`, multa,{ headers: this.agregarAuthorizationHeader() } );
  }

  putMulta( idx:number,  multa:MultaModule ){
    return this.http.put(`${ this.url}/${ idx }`, multa,{ headers: this.agregarAuthorizationHeader() });
  }

  deleteMulta( idx:number ){
    return this.http.delete(`${ this.url }/${ idx }`,{ headers: this.agregarAuthorizationHeader() });
  }


  getMultasPorVehiculo( idv:number ){
    return this.http.get(`${ this.url2 }/${ idv }`,{ headers: this.agregarAuthorizationHeader() })
  }



}
