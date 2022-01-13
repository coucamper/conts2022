import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { vacacionEquipoModel } from '../models/vacacionequipoModel';
//import { rutaModel } from '../models/rutaModel';


@Injectable({
  providedIn: 'root'
})
export class VacacionesequipoService {

  url = 'http://localhost:8093/vacacionesws'

  constructor( private http: HttpClient,
               private activatedRoute:ActivatedRoute) {
    console.log("Servicio vacaciones funcionando! ");
  }


  getVacacionesequipo(){
    return this.http.get(`${ this.url }`)
    .pipe( map( (data:any) => {
      return data;
    }));
  }

  getVacacionequipo( idx: number ) {
    return this.http.get(`${this.url}/${ idx }`);
  }

  saveVacacionequipo( vacacion:vacacionEquipoModel ){
    return this.http.post(`${ this.url }`,vacacion);
  }

  updateVacacionequipo( idx:number, vacacion:vacacionEquipoModel ){
    return this.http.put(`${ this.url }/${ idx }`, vacacion);
  }

  deleteVacacionequipo( idx:number ){
    return this.http.delete(`${ this.url }/${ idx }`);
  }





}
