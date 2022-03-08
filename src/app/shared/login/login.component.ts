import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginModel } from 'src/app/models/loginModel';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { LoginService } from 'src/app/services/login.service';
import { TokenStorageServiceService } from 'src/app/services/token-storage-service.service';
import { UsersAuthService } from 'src/app/services/users-auth.service';
import { Usuario } from 'src/app/usuarios/usuario';
import swal from 'sweetalert2';




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
  user:Usuario;
  val:any;

  constructor( private router: Router, private activatedR: ActivatedRoute, private _login: LoginService,
    private authService: AuthServiceService, private tokenStorage: TokenStorageServiceService, private _authService: UsersAuthService, private _clientes:ClienteService ) {
    this.user = new Usuario();
    this.creaForm();

  }


  creaForm(){
    this.formLogin = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }



  // onChangeUser(newValue:any){
  //   this.controlUser = this.formLogin.controls['username'].value;
  //   this.controlUser = newValue;
  //   this.usuario = newValue;
  //   console.log(newValue);
  // }


  onChangePassword(newValue:any){
    this.controlPass = this.formLogin.controls['password'].value;
    this.controlPass = newValue;
    this.password = newValue;
    console.log(newValue);
  }

  logIn(){

    // this.user.username = this.formLogin.controls['username'].value;
    // this.user.password = this.formLogin.controls['password'].value;


    this._authService.logIn(this.user).subscribe( response =>{

      console.log(response);
      this.router.navigate(['/clientes']);
      swal.fire('Login',`Hola ${response.username} has iniciado sesión con éxito`, 'success');
    });
    console.log(this.user.password);
  }

  // acceder(){
  //   this._login.getAuth().subscribe();
  // }

  // onSubmit(): void {

  //   val = this.formLogin.value;

  //   this.authService.login(this.usuario, this.password).subscribe(
  //     data => {
  //       this.tokenStorage.saveToken(data.accessToken);
  //       this.tokenStorage.saveUser(data);
  //       this.isLoginFailed = false;
  //       this.isLoggedIn = true;
  //       this.roles = this.tokenStorage.getUser().roles;
  //       this.reloadPage();
  //     },
  //     err => {
  //       this.errorMessage = err.error.message;
  //       this.isLoginFailed = true;
  //     }
  //   );
  // }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }


  reloadPage(): void {
    window.location.reload();
  }

}

/*
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  onSubmit(): void {
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }
}

*/
