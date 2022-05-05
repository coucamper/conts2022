import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ClaseModel } from '../models/claseModel';


@Injectable({
  providedIn: 'root'
})
export class ClaseService {

  url = 'http://localhost:8093/';

  constructor( private http: HttpClient,
               private activatedRoute:ActivatedRoute
    ) {

  }


  getClases(){
    return this.http.get(`${ this.url}clase`);
  }


}
