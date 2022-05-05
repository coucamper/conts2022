import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { PesajeModel } from '../models/pesajeModel';
import { TurnoEmpleadoModel } from '../models/turnoEmpleadoModel';
import { AuthService } from './auth-service.service';
import { URL_BACKEND } from '../config/config';




@Injectable({
  providedIn: 'root'
})
export class TurnoempleadoService {
/*   url = 'http://localhost:8093/turnosempleados';
  urlByFecha = 'http://localhost:8093/turnosempleadosbyfecha'; */

  url = URL_BACKEND+ '/turnosempleados';
  urlByFecha = URL_BACKEND+ '/turnosempleadosbyfecha';




  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });


  constructor( private http: HttpClient, private activatedRoute:ActivatedRoute, private _turnoempleado: TurnoEmpleadoModel, public _authService: AuthService ) {
    console.log("servicio de zonas funcionando!");
  }

  private agregarAuthorizationHeader() {
    let token = this._authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  getTurnosEmpleados(){
    return this.http.get(`${ this.url }`,{ headers: this.agregarAuthorizationHeader() });
  }


  getTurnosEntreFechas( fechainicioturno:string, fechafinturno:string ){
    return this.http.get(`${ this.urlByFecha }/${fechainicioturno}/${fechafinturno}`,{ headers: this.agregarAuthorizationHeader() });
  }


  getTurnoEmpleado( idx:number ){
    console.log("ConcejosComarca"+this.http.get(`${ this.url }/${ idx }`,{ headers: this.agregarAuthorizationHeader() }));
    return this.http.get(`${ this.url }/${ idx }`);
  }


}
