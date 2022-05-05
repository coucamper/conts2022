import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './auth-service.service';
import { contratoEmpleadoModel } from '../models/contratoempleadoModel';
import { URL_BACKEND } from '../config/config';



@Injectable({
  providedIn: 'root'
})
export class TipocontratoService {

/*   url = 'http://localhost:8093/tipocontrato';
  urlContrato = 'http://localhost:8093/contratoempleado'; */

  url = URL_BACKEND + '/tipocontrato';
  urlContrato = URL_BACKEND + '/contratoempleado';

  contratoEmpleado:contratoEmpleadoModel;

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor( private http: HttpClient, private activatedRoute: ActivatedRoute, public _authService: AuthService) { console.log("tipo contrato funcionando"); }


  private agregarAuthorizationHeader() {
    let token = this._authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  getTiposContrato(){
    return this.http.get(`${this.url}`,{ headers: this.agregarAuthorizationHeader() });
  }


  setContratoEmpleado( idempleado:number, idtipocontrato:number ){
    return this.http.post(`${ this.urlContrato}/${idempleado}/${idtipocontrato}`,{ headers: this.agregarAuthorizationHeader() });
  }


}
