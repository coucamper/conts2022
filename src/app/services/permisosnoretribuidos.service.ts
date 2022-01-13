import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PermisoNoRetribuidoModel } from '../models/permisonoretribuidoModel';


@Injectable({
  providedIn: 'root'
})
export class PermisosnoretribuidosService {


  url = 'http://localhost:8093/permisonr';

  constructor( private http: HttpClient, private activatedRoute: ActivatedRoute) {
    console.log("Servicio tipos de incidencia funcionando");
   }


  getTiposPermisosNr(){
    return this.http.get(`${ this.url }`);
  }

  getTipoPermisoNr( idx:number ){
    return this.http.get(`${ this.url}/${ idx }`);
  }

  postTipoPermisoNr( permiso: PermisoNoRetribuidoModel){
    return this.http.post(`${ this.url }`, permiso );
  }

  putTipoPermisoNr( idx:number, permiso: PermisoNoRetribuidoModel){
    return this.http.put(`${ this.url }/${ idx }`, permiso );
  }

  deleteTipoPermisoNr( idx:number ){
    return this.http.delete(`${ this.url }/${ idx }`);
  }

}
