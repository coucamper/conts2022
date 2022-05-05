import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ContenedorVOModule } from '../models/contenedor-vo/contenedorModel';
import { ContModule } from '../models/contModel';
import { ContenedoresRutasModel } from '../models/contenedoresRutaModel';
import { AuthService } from './auth-service.service';
import { URL_BACKEND } from '../config/config';





@Injectable({
  providedIn: 'root'
})
export class ContenedoresRutasService {

  //url = "http://localhost:8093";
  //urlanadir = "http://localhost:8093/addcontenedorruta?idcontenedor=";
  //urlLeer = 'http://localhost:8093/contenedoresdelaruta';



   url = URL_BACKEND;
   urlanadir = URL_BACKEND + "/addcontenedorruta?idcontenedor=";
   urlLeer = URL_BACKEND + '/contenedoresdelaruta';


  urlAnadir2 = "&idruta=";




  contenedor:ContenedorVOModule;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor( private http: HttpClient,
               private activatedRoute:ActivatedRoute, public _authService: AuthService
    ) {
    console.log("servicio de contenedoresRutas funcionando ");
  }


  private agregarAuthorizationHeader() {
    let token = this._authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }


  getContenedoresRuta(){
    return this.http.get(this.url+'/contenedoresrutasws',{ headers: this.agregarAuthorizationHeader() })
    .pipe( map( (data:any) => {
      return data;
    }));
  }



  getContenedorRuta( idx : number){
    return this.http.get(`${this.url}contenedorruta/${idx}`,{ headers: this.agregarAuthorizationHeader() });
  }

  leerContenedoresRuta( idruta:number){
    return this.http.get(`${ this.urlLeer }/${ idruta }`, { headers: this.agregarAuthorizationHeader() });
  }


  saveContenedorRuta( idx:number,  contenedor: ContenedorVOModule){
    return this.http.post(`${this.url}contenedorruta/${idx}`, contenedor, { headers: this.agregarAuthorizationHeader() } );
  }


  // addContenedorRuta( idx : number, contenedor : ContenedoresRutasModel){
  //   return this.http.post(`http://localhost:8093/addcontenedorruta/${idx}`, contenedor );
  // }

  asociarContenedorARuta( idruta:number, idconten:number, contenruta:ContenedoresRutasModel ){
    return this.http.post(this.url+`/contenedoraruta/${idruta}/${idconten}`, contenruta, { headers: this.agregarAuthorizationHeader() });
  }



}

