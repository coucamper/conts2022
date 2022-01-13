import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tipoincidenciaModel } from '../models/tipoincidenciaModel';



@Injectable({
  providedIn: 'root'
})
export class TiposincidenciaService {

  url = 'http://localhost:8093/tipoincidencia';

  constructor( private http: HttpClient, private activatedRoute: ActivatedRoute) {
    console.log("Servicio tipos de incidencia funcionando");
   }


  getTiposIncidencia(){
    return this.http.get(`${ this.url }`);
  }

  getTipoIncidencia( idx:number ){
    return this.http.get(`${ this.url}/${ idx }`);
  }

  postTipoIncidencia( tipoincidencia:tipoincidenciaModel){
    return this.http.post(`${ this.url }`, tipoincidencia );
  }

  putTipoIncidencia( idx:number, tipoincidencia:tipoincidenciaModel){
    return this.http.put(`${ this.url }/${ idx }`, tipoincidencia );
  }

  deleteTipoIncidencia( idx:number ){
    return this.http.delete(`${ this.url }/${ idx }`);
  }


}
