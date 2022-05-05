import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestModel } from '../models/request/requestModel';
import { UsuarioModel } from '../models/usuarioModel';
import { UserModel } from '../models/userModel';
import { URL_BACKEND } from '../config/config';




const AUTH_API = 'http://localhost:8093/api/login';



const httpOptions = {
 headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private _usuario:UserModel;
  private _token:any;

  constructor(private http: HttpClient) { }





  public get usuario(): UserModel {
    if (this._usuario != null) {
      return this._usuario;
    } else if (this._usuario == null && sessionStorage.getItem('username') != null) {
      localStorage.setItem('admin',JSON.stringify("admin"));
      return this._usuario;
    }
    return new UserModel();
  }

  public get token() {
    if (this._token != null) {
      return this._token;
    } else if (this._token == null && sessionStorage.getItem('token') !=null) {
      this._token = sessionStorage.getItem('token');
      return this._token;
    }
    return null;
  }

  login(usuario: UserModel): Observable<any> {
    //const urlEndpoint = 'http://localhost:8093/oauth/token';

     const urlEndpoint = URL_BACKEND + '/oauth/token';

    const credenciales = btoa('angularapp' + ':' + '12345');
    const httpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded','Authorization': 'Basic ' + credenciales});

    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', usuario.username);
    params.set('password', usuario.password);
    //console.log(params.toString());
    return this.http.post<any>(urlEndpoint, params.toString(), { headers: httpHeaders });
  }


  guardarUser(access_token:string):void{
    let payload = this.obtenerDatosDelToken(access_token);
    this._usuario = new UserModel();
    this._usuario.username = payload.user_name;
    this._usuario.password = payload.password;
    this._usuario.roles = payload.authorities;
    sessionStorage.setItem('usuario', JSON.stringify(this._usuario));
  }

  guardarToken(access_token:string):void{
    this._token = access_token;
    sessionStorage.setItem('token', access_token);
  }

  obtenerDatosDelToken(access_token:string):any{
    if(access_token != null ){
      return JSON.parse(atob(access_token.split(".")[1]));
    }
    return null;
  }


  isAutheticated():boolean{
    let payload = this.obtenerDatosDelToken(this.token);
    if(payload != null && payload.user_name && payload.user_name.length > 0){
      return true;
    }
    return false;
  }

  hasRole(role: string): boolean {
    if (this._usuario.roles.includes(role)) {
      return true;
    }
    return false;
  }



  logout():void{
    this._token = null;
    //this._usuario = ;
    sessionStorage.clear();
    sessionStorage.removeItem('usuario');
    sessionStorage.removeItem('token');
  }


}
