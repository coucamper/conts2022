import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { MensajeModel } from '../models/mensajeModel';
import { number } from 'echarts';
import { AuthService } from './auth-service.service';
import { URL_BACKEND } from '../config/config';




@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  //url = 'http://localhost:8093/mensaje';
  //url2 = 'http://localhost:8093/mensajeform';


   url = URL_BACKEND+'/mensaje';
   url2 = URL_BACKEND+'/mensajeform';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor( private http: HttpClient, private activatedRoute: ActivatedRoute, public _authService: AuthService ) {

  }

  private agregarAuthorizationHeader() {
    let token = this._authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  getMensajes(){
    return this.http.get('http://localhost:8093/mensaje',{ headers: this.agregarAuthorizationHeader() })
    .pipe( map( (data:any) => {
      return data;
    }));
  }

  getMensaje( idmensaje:number ){
    return this.http.get(`${this.url}/${idmensaje}`,{ headers: this.agregarAuthorizationHeader() });
  }

  getMensajesReceptor( idreceptor:number ){
    return this.http.get(`http://localhost:8093/mensajereceptor/${idreceptor}`,{ headers: this.agregarAuthorizationHeader() });
  }

  postMensaje( mensaje:MensajeModel ){
    return this.http.post(`${this.url}`, mensaje ,{ headers: this.agregarAuthorizationHeader() } );
  }


  postMensajeFormulario( idreceptor:number, idremitente:number, idtipoimpor:number, mensaje:MensajeModel){
    return this.http.post(`${this.url2}/${idreceptor}/${idremitente}/${idtipoimpor}`, mensaje ,{ headers: this.agregarAuthorizationHeader() });
  }

  deleteMensajeFormulario( idmensaje:number ){
    return this.http.delete(`${this.url}/${idmensaje}`,{ headers: this.agregarAuthorizationHeader() });
  }

}
