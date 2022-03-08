import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuarios/usuario';




@Injectable({
  providedIn: 'root'
})
export class UsersAuthService {

  constructor( private http: HttpClient,
               private activatedRoute:ActivatedRoute,
               private _router: Router ) { }


  logIn( user:Usuario ):Observable<any> {
    const urlEndpoint = 'http://localhost:8093/oauth/token';
    const credenciales = btoa('angularapp'+':'+'12345');
    const httpHeaders = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded','Authorization':'Basic ' + credenciales});

    let params = new URLSearchParams();
    params.set('grant_type','password');
    params.set('username', user.username);
    params.set('password', user.password);
    console.log(params.toString());
    return this.http.post<any>(urlEndpoint, params.toString(), {headers: httpHeaders});
  }



}


