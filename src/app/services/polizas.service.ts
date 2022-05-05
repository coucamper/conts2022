import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { PolizaModule } from '../models/polizaModel';
import { AuthService } from './auth-service.service';
import { URL_BACKEND } from '../config/config';



export class Poliza {

  idpoliza:number;
  numpoliza:string;
  aseguradora:string;
  fechapoliza:string;
  modalidad:string;
  franquicia:number;
  importepoliza:number;
  periodofact:string;
  vehiculo:number;

}




@Injectable({
  providedIn: 'root'
})
export class PolizasService {

/*   url = 'http://localhost:8093/poliza';
  url2 = 'http://localhost:8093/polizav';
  urlPage = 'http://localhost:8093/polizapage';
  pol:any[] = [];
  salvarPoliza = 'http://localhost:8093/salvarpoliza'; */

  url = URL_BACKEND+'poliza';
  url2 = URL_BACKEND+'/polizav';
  urlPage = URL_BACKEND+'/polizapage';
  salvarPoliza = URL_BACKEND+'/salvarpoliza';
  pol:any[] = [];

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor( private http: HttpClient, private activatedRoute:ActivatedRoute, public _authService: AuthService ) {
    console.log("servicio de polizas funcionando!");
   }

   private agregarAuthorizationHeader() {
    let token = this._authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }


   getPolizas(){
    return this.http.get(`${ this.url }`,{ headers: this.agregarAuthorizationHeader() })
    .pipe( map( (data:any) => {
      return data;
    }));
  }


  getPolizasPage(page:number){
    return this.http.get(`${ this.urlPage }/${page}`,{ headers: this.agregarAuthorizationHeader() })
    .pipe
    (tap((response:any) =>{
      //console.log("Clientes service tap1");
      (response.content as Poliza[]).forEach(poliza => {
        //console.log(localidad)
        this.pol.push(poliza);
      });
    }),
    map(response => {
      (response.content as Poliza[]).map(poliza =>{
        poliza.numpoliza = poliza.numpoliza.toUpperCase();
        return poliza;
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

  getPoliza( idx:number ){
    return this.http.get(`${ this.url }/${ idx }`,{ headers: this.agregarAuthorizationHeader() });
  }

  getPolizaPorVehiculo( idx:number ){
    return this.http.get(`${ this.url2 }/${ idx }`,{ headers: this.agregarAuthorizationHeader() });
  }


  postPoliza( poliza:PolizaModule){
    return this.http.post(`${ this.salvarPoliza }`, poliza, { headers: this.agregarAuthorizationHeader() } );
  }

  putPoliza( idx:number, poliza:PolizaModule ){
    return this.http.put(`${ this.url}/${ idx }`, poliza, { headers: this.agregarAuthorizationHeader() });
  }

  deletePoliza( idx:number ){
    return this.http.delete(`${ this.url }/${ idx }`,{ headers: this.agregarAuthorizationHeader() });
  }
}
