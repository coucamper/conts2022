import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IncidenciasService } from '../services/incidencias.service';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.css']
})
export class IncidenciasComponent implements OnInit {

  incidencias:any[] = [];

  constructor( private router: Router, private _incidencias: IncidenciasService ) {
        this._incidencias.getIncidencias().subscribe( data => {
        console.log(data);
        this.incidencias = data;
   })
  }

  ngOnInit(): void {
  }

}
