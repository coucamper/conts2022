import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginModel } from 'src/app/models/loginModel';

import { ClienteService } from 'src/app/services/cliente.service';
import { LoginService } from 'src/app/services/login.service';
import { TokenStorageServiceService } from 'src/app/services/token-storage-service.service';
import { UsersAuthService } from 'src/app/services/users-auth.service';
import { Usuario } from 'src/app/usuarios/usuario';
import swal from 'sweetalert2';
import { finalize } from "rxjs/operators";
import { UsuarioModel } from 'src/app/models/usuarioModel';
import { AuthService } from 'src/app/services/auth-service.service';
import { UserModel } from 'src/app/models/userModel';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  formLogin:FormGroup;
  login:LoginModel = new LoginModel();
  loginObject:LoginModel;
  controlUser:any;
  controlPass:any;
  usuario:any;
  password:any;

  clientes:any[]=[];
  // para seguridad
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles:any[] = [];
  user:UserModel = new UserModel();
  val:any;

  title = 'Demo';
  authenticated = false;
  greeting = {};

  model: any = {};
  recordarUsuario:boolean;
  controlRecordarUsuario:any;

  constructor( private router: Router, private activatedR: ActivatedRoute, public _login: LoginService,
    public authService: AuthService, private tokenStorage: TokenStorageServiceService,
    public _authService: UsersAuthService,
    public _clientes:ClienteService,
    private http: HttpClient ) {

    this.usuario = new UserModel();
    this.creaForm();
    this.authenticate();
  }





  creaForm(){
    this.formLogin = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      recordarUsuario: new FormControl()
    });
  }


  onChangePassword(newValue:any){
    this.controlPass = this.formLogin.controls['password'].value;
    this.controlPass = newValue;
    this.password = newValue;
    console.log(newValue);
  }

  onChangeRecordarUsuario(newValue:any) {
    this.controlRecordarUsuario = this.formLogin.controls['recordarUsuario'].value;
    this.controlRecordarUsuario = newValue;  // don't forget to update the model here
    this.recordarUsuario = newValue;
    console.log(this.recordarUsuario);
}



  logIn():void {
    if(this.user.username == null || this.user.password == null){
      swal.fire('Error de login',`No se han introducido datos validos`, 'error');
    }
    this.authService.login(this.user).subscribe( response =>{
      console.log(response);
      console.log(this.user);

     let payload = JSON.parse(atob(response.access_token.split(".")[1]));
      console.log(payload);

      this.authService.guardarUser(response.access_token);
      this.authService.guardarToken(response.access_token);

      let usuarioTraido = this.authService.usuario;
      // for(let i in response){
      //   console.log(i+":"+ response[i]);
      // }
      this.router.navigate(['/panel']);
      if(response){
        swal.fire('Login',`Hola ${usuarioTraido.username} has iniciado sesión con éxito`, 'success');
      }

    },  (error:any) => {
      if(error.status==400){
        swal.fire('Error de login',`Usuario o clave erroneas`, 'error');
      }
    });
    console.log(this.user.password);
  }


  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

    if(this.authService.isAutheticated()){
      swal.fire('Login', `Hola ${this.authService.usuario.username} ya estás autenticado`,'info');
      this.router.navigate(['/clientes']);
    }

    this.recordarUsuario = true;
    console.log(this.recordarUsuario);
  }


  reloadPage(): void {
    window.location.reload();
  }

  authenticate() {

    this.http.get(`http://localhost:8093/api/clientes`).subscribe(response => {
        if (response) {
            this.authenticated = true;
            this.http.get('resource').subscribe(data => this.greeting = data);
        } else {
            this.authenticated = false;
        }
    }, () => { this.authenticated = false; });

  }
  logout() {
      this.http.post('logout', {}).pipe(
        finalize(() => {
          this.authenticated = false;
          this.router.navigateByUrl('/login');
      })).subscribe();
  }




}

