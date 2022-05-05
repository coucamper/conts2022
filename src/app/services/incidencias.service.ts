import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators'
import { URL_BACKEND } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

  constructor( private http: HttpClient, private activatedRoute: ActivatedRoute ) {
    console.log("servicio de incidencias funcionando ");
  }


  getIncidencias(){
    return this.http.get('http://localhost:8093'+'/incidencia')
    .pipe( map( (data:any) => {
      return data;
    }));
  }

}
