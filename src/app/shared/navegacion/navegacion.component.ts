import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  exportAs: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  @Input() items:any[] = [];

  fecha = new Date();
  mes = new Date().toLocaleString( 'default', { month: 'long' } );
  anio = new Date().getFullYear().toLocaleString();
  usuarioLogueado:any = this.authService.usuario.username;
  username:any;
  usuarioSesion:any;




  constructor( public authService:AuthService, private router:Router ) {

    if(sessionStorage.getItem('usuario')){
     this.usuarioSesion = this.authService.usuario.username;
    }

  }



  ngOnInit(): void {
    // let cadena = this.usuarioLogueado.split(",");
    // console.log(cadena);
    // let cadena2 = cadena.substring();
    // console.log(cadena2)
    // console.log("user: "+cadena[2]);
    this.username = this.authService.usuario.username;
    console.log(this.username)
  }

  logout():void{

    this.authService.logout();
    Swal.fire('login', `Hola ${this.username}, has cerrado sesión con éxito`, 'success');
  }

}
