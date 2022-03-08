import { Component, OnInit, Input } from '@angular/core';
import { RouterLinkActive } from '@angular/router';


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

  constructor() { }

  ngOnInit(): void {
  }

  logout(){

  }

}
