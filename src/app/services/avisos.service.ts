import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AvisoModel } from '../models/avisoModel';


@Injectable({
  providedIn: 'root'
})
export class AvisosService {

  url = 'http://localhost:8093/aviso';

  idx:number;

  constructor( private http: HttpClient, private activatedR: ActivatedRoute ) {
   }

  getAvisos(){
    return this.http.get(`${ this.url }`);
    }

  getAviso( idx:number ){
    return this.http.get(`${ this.url }/${ idx }`);
  }

  postAviso( idremitente:number, aviso:AvisoModel ){
    return this.http.post(`${ this.url }/${idremitente}`, aviso );
  }

  putAviso( idx:number, aviso:AvisoModel ){
    return this.http.put(`${ this.url }/${ idx }`, aviso );
  }

  deleteAviso( idx:number ){
    return this.http.delete(`${this.url}/${Number(idx)}`);
  }

}
