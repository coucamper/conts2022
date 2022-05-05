import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { vacacionEquipoModel } from '../models/vacacionequipoModel';
import { AuthService } from './auth-service.service';
import { EmpleadoModel } from '../models/empleado';
import { VacacionEmpleado } from '../models/vacacioneEmpleado';
import { VacacionEmpleadoActualizarModel } from '../models/vacacionEmpleadoActualizar';
import { VacacionGeneralModel } from '../models/vacaciongeneralModel';
import { URL_BACKEND } from '../config/config';




export class Vacacion{

  idplanvacaciones:number;
  diasvacaciones:number;
  finiciovaca:string;
  ffinvaca:string;
  diasconsume:number;
  diasconsumidos:number;
  diasrestantes:number;
  empleado:EmpleadoModel;
  anyoanterior:string;
  pendientesanyoanterior:number;

}



@Injectable({
  providedIn: 'root'
})
export class VacacionesequipoService {

/*   url = 'http://localhost:8093/vacacionesws';
  urlemp = 'http://localhost:8093/getvacacionesidempleado';
  urlPage = 'http://localhost:8093/vacacioneswspage';
  urlPostVacacionEmpleado = 'http://localhost:8093/postvacacionempleado';
  urlGetVacacionPorIdvac = 'http://localhost:8093/getvacacionesporid';
  urlPostVacacion = "http://localhost:8093/postvacacion"; */

  url = URL_BACKEND + '/vacacionesws';
  urlemp = URL_BACKEND + '/getvacacionesidempleado';
  urlPage = URL_BACKEND + '/vacacioneswspage';
  urlPostVacacionEmpleado = URL_BACKEND + '/postvacacionempleado';
  urlGetVacacionPorIdvac = URL_BACKEND + '/getvacacionesporid';
  urlPostVacacion = URL_BACKEND + "/postvacacion";

  vac:any[] = [];

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor( private http: HttpClient,
               private activatedRoute:ActivatedRoute, public _authService: AuthService) {

  }

  private agregarAuthorizationHeader() {
    let token = this._authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  getVacacionesequipo(){
    return this.http.get(`${ this.url }`,{ headers: this.agregarAuthorizationHeader() })
    .pipe( map( (data:any) => {
      return data;
    }));
  }


  getVacacionesPage(page:number){
    return this.http.get(`${ this.urlPage }/${page}`,{ headers: this.agregarAuthorizationHeader() })
    .pipe
    (tap((response:any) =>{
      //console.log("Clientes service tap1");
      (response.content as Vacacion[]).forEach(vacacion => {
        //console.log(localidad)
        this.vac.push(vacacion);
      });
    }),
    map(response => {
      (response.content as Vacacion[]).map(vacacion =>{
        vacacion.empleado = vacacion.empleado;
        return vacacion;
      });
      return response;
    }),
    tap(response =>{
     // console.log("Clientes tap 2");
      response.content.forEach((vacacion:any) =>{
       // console.log(localidad.denom)
      })
    }));
  }



  getVacacionequipo( idx: number ) {
    return this.http.get(`${this.url}/${ idx }`,{ headers: this.agregarAuthorizationHeader() });
  }

  saveVacacionequipo( vacacion:VacacionGeneralModel ){
    return this.http.post(`${ this.url }`,vacacion,{ headers: this.agregarAuthorizationHeader() });
  }

  updateVacacionequipo( idx:number, vacacion:vacacionEquipoModel ){
    return this.http.put(`${ this.url }/${ idx }`, vacacion, { headers: this.agregarAuthorizationHeader() });
  }

  deleteVacacionequipo( idx:number ){
    return this.http.delete(`${ this.url }/${ idx }`,{ headers: this.agregarAuthorizationHeader() });
  }

  getVacacionesEmpleado( idemp:number ){
    return this.http.get(`${this.urlemp }/${ idemp }`,{ headers: this.agregarAuthorizationHeader() });
  }

  getVacacionesPorId( idemp:number, idvac:number ){
    return this.http.get(`${this.urlGetVacacionPorIdvac }/${idemp}/${ idvac }`,{ headers: this.agregarAuthorizationHeader() });
  }



  putVacacionEmpleado( idvac:number, idemp:number, vacacion:VacacionEmpleadoActualizarModel ){
    return this.http.put(`${this.url }/${idvac}/${idemp}`, vacacion, { headers: this.agregarAuthorizationHeader() });
  }


  postVacacionEmpleado( idemp: number, vacacion: VacacionEmpleado ){
    return this.http.post(`${ this.urlPostVacacionEmpleado}/${idemp}`, vacacion, { headers: this.agregarAuthorizationHeader() });
  }


  postVacacion( idemp:number, vacacion: VacacionGeneralModel){
    return this.http.post(`${ this.urlPostVacacion}/${ idemp }`, vacacion,{ headers: this.agregarAuthorizationHeader() });
  }




}
