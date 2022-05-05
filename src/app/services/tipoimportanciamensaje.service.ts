import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { URL_BACKEND } from '../config/config';
import { AuthService } from './auth-service.service';



@Injectable({
  providedIn: 'root'
})
export class TipoimportanciamensajeService {


  //url = 'http://localhost:8093/tipoimportancia';

  url = URL_BACKEND + '/tipoimportancia';

  constructor(  private http: HttpClient, private activatedRoute:ActivatedRoute, public _authService: AuthService ) {

   }

   getTiposimportancia(){
    return this.http.get(`${ this.url }`);
  }

  getTipoimportancia( idimport:number ){
    return this.http.get(`${ this.url }/${ idimport }`);
  }

}
