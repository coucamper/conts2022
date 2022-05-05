import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { URL_BACKEND } from '../config/config';
import { AuthService } from './auth-service.service';



@Injectable({
  providedIn: 'root'
})
export class TipomantenimientoService {

 // url = 'http://localhost:8093/tipomantenimiento';

  url = URL_BACKEND + '/tipomantenimiento';

  constructor( private http: HttpClient, private activatedRoute:ActivatedRoute , public _authService: AuthService) {
    console.log("servicio de tiposmantenimiento funcionando!");
  }


  getTiposmantenimiento(){
    return this.http.get(`${ this.url }`);
  }



}
