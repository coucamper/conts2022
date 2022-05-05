import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { URL_BACKEND } from '../config/config';
import { permisoretribuidoModel } from '../models/permisoretribuidoModel';



@Injectable({
  providedIn: 'root'
})
export class PermisosretribuidosService {


  //url = 'http://localhost:8093/permiso';

  url = URL_BACKEND + '/permiso';
  constructor( private http: HttpClient, private activatedRoute: ActivatedRoute) {
    console.log("Servicio tipos de incidencia funcionando");
   }


  getTiposPermisosR(){
    return this.http.get(`${ this.url }`);
  }

  getTipoPermisoR( idx:number ){
    return this.http.get(`${ this.url}/${ idx }`);
  }

  postTipoPermisoR( permiso: permisoretribuidoModel){
    return this.http.post(`${ this.url }`, permiso );
  }

  putTipoPermisoR( idx:number, permiso: permisoretribuidoModel){
    return this.http.put(`${ this.url }/${ idx }`, permiso );
  }

  deleteTipoPermisoR( idx:number ){
    return this.http.delete(`${ this.url }/${ idx }`);
  }

}
