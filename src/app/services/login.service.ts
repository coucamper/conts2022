import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { LoginModel } from '../models/loginModel';
import { UsuarioModel } from '../models/usuarioModel';
import { URL_BACKEND } from '../config/config';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //url = "https://localhost:8093/login"; // ESTO ES PARA LOCAL

   url = URL_BACKEND + "/login"; // ESTO PARA PRODUCCION

  constructor( private http: HttpClient, private activatedR: ActivatedRoute ) {
  }

  getAuth( ){
    return this.http.get(`${this.url}`);
  }

  logout(){

  }


}
