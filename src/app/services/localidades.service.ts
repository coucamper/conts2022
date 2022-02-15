

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class LocalidadesService {

  url = 'http://localhost:8093/concejo';

  constructor( private http: HttpClient, private activatedRoute:ActivatedRoute ) {
    console.log("servicio de localidades funcionando!");
  }


  getLocalidades(){
    return this.http.get(`${ this.url }`);
  }


  getLocalidad( idx:number ){
    return this.http.get(`${ this.url }/${ idx }`);
  }



}
