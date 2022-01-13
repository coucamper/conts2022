import { Component, OnInit } from '@angular/core';
import { IncidenciasService } from 'src/app/services/incidencias.service';

@Component({
  selector: 'app-barra-herram-incidenciasvehiculos',
  templateUrl: './barra-herram-incidenciasvehiculos.component.html',
  styleUrls: ['./barra-herram-incidenciasvehiculos.component.css']
})
export class BarraHerramIncidenciasvehiculosComponent implements OnInit {

  incidencias:any[] = [];
  empleados:any[] = [];

  gravedad = [
    { gravedad: 'leve'},
    { gravedad: 'media'},
    { gravedad: 'grave'},
    { gravedad: 'muy grave'},
  ];

  estados = [
    { estado: 'notificado'},
    { estado: 'pendiente'},
    { estado: 'en proceso'},
    { estado: 'resuelta'}
  ];


  div1:boolean=false;

  constructor( private _incidencias: IncidenciasService ) {

    this.div1Function();

    this._incidencias.getIncidencias().subscribe( (inci:any) =>{
      this.incidencias = inci;
    });


   }

  div1Function(){

    this.div1 = !this.div1;

  }

  ngOnInit(): void {
  }

}
