import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ClaseModel } from '../models/claseModel';
import { AveriaModel } from '../models/averia-model.ts/averiaModel';


@Injectable({
  providedIn: 'root'
})

export class AveriasService {

  url = 'http://localhost:8093/averias';

  idx:number;

  constructor( private http: HttpClient, private activatedRoute:ActivatedRoute) {
    console.log("servicio de clases funcionando ");
  }

  getAverias(){
    return this.http.get(`${ this.url }`);
  }

  getAveria( idx:number ){
    return this.http.get(`${ this.url }/${ idx }`);
  }

  postAveria( averia: AveriaModel){
    return this.http.post(`${ this.url }`, averia );
  }

  putAveria( idx:number, averia:AveriaModel ){
    return this.http.put(`${ this.url }/${ idx }`, averia );
  }

  deleteAveria( idx:number ){
    return this.http.delete(`${ this.url }/${ idx }`);
  }




}
